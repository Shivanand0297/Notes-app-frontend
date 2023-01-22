import NoteContext from "../context/notes/NoteContext";

import React, { useContext } from 'react'
import NoteItem from "./NoteItem";

const Note = () => {

    const { notes } = useContext(NoteContext)

  return (
    <div className="row my-3">
        { notes.map((note, index)=>(
            <NoteItem note={note} key={note._id+index} />
        ))}
    </div>
  )
}

export default Note