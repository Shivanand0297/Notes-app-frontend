import React, { useState } from "react";
import NoteContext from "./NoteContext"

const NoteState = ({children}) =>{

  const HOST = "http://127.0.0.1:4000"


      const [notes, setNotes] = useState([])

      // function to get all notes
      const getAllNotes = async () =>{
        const res = await fetch(`${HOST}/api/notes/getnotes`, {
          method: "GET", 
          headers: {
            "Content-Type" : "application/json",
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzY2JhNDhhN2VkMTJhMWViNTQzZGQ2NCIsImlhdCI6MTY3NDQwMDk1MiwiZXhwIjoxNjc0NjYwMTUyfQ.ynvh3AXUvfPCpQTmJhhjB8QLAkLUmXRabx8oRWYY87Y"
          },
        })

        const data = await res.json()

        console.log(data.notes)

        // setting initialNotes 
        setNotes(data.notes)
      }




      // function to add a note
      const addNote = async (title, description, tag) =>{
        
        // api call
        const res = await fetch(`${HOST}/api/notes/createnote`, {
          method: "POST", 
          headers: {
            "Content-Type" : "application/json",
            "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzY2JhNDhhN2VkMTJhMWViNTQzZGQ2NCIsImlhdCI6MTY3NDQwMDk1MiwiZXhwIjoxNjc0NjYwMTUyfQ.ynvh3AXUvfPCpQTmJhhjB8QLAkLUmXRabx8oRWYY87Y"
          },
          body: JSON.stringify({title, description, tag})
        })

        const data = await res.json()
        console.log(data.note);
        setNotes([...notes, data.note]) // this will add the newState object at the end
      }


      // function to delete a note
      const deleteNote = async (id) =>{ 
        // api call
        const res = await fetch(`${HOST}/api/notes/deletenote/${id}`, {
          method: "DELETE", 
          headers: {
            "Content-Type" : "application/json",
            "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzY2JhNDhhN2VkMTJhMWViNTQzZGQ2NCIsImlhdCI6MTY3NDQwMDk1MiwiZXhwIjoxNjc0NjYwMTUyfQ.ynvh3AXUvfPCpQTmJhhjB8QLAkLUmXRabx8oRWYY87Y"
          },
        })
        
        const data = await res.json()

        console.log(data);

        setNotes(notes.filter(note=>(
          note._id !== id
        )))

        console.log(id);
      }
      
      // function to edit a note

      const editNote = async (id, title, description, tag) =>{

        // api call
        const res = await fetch(`${HOST}/api/notes/updatenote/${id}`, {
          method: "PUT", 
          headers: {
            "Content-Type" : "application/json",
            "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzY2JhNDhhN2VkMTJhMWViNTQzZGQ2NCIsImlhdCI6MTY3NDQwMDk1MiwiZXhwIjoxNjc0NjYwMTUyfQ.ynvh3AXUvfPCpQTmJhhjB8QLAkLUmXRabx8oRWYY87Y"
          },
          body: JSON.stringify({title, description, tag})
        })

        const json = await res.json()
        console.log(json);

        console.log(notes);
        let newNote = JSON.parse(JSON.stringify(notes))

        console.log(newNote);

        for( let i = 0; i<newNote.length; i++){
          let note = newNote[i]
          if(note._id === id){
              note.title = title
              note.description = description
              note.tag = tag
              break;
          }
        }
        setNotes(newNote)
      }

    return(
        <NoteContext.Provider value={{notes, setNotes, addNote, deleteNote, getAllNotes, editNote}} >
            {children}
        </NoteContext.Provider>
    )

}
export default NoteState