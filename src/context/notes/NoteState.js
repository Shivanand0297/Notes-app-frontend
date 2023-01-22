import React, { useState } from "react";
import NoteContext from "./NoteContext"

const NoteState = ({children}) =>{

    const initialNotes = [
        {
          "_id": "63cbd5b846317d61cbb31911",
          "title": "saturday",
          "description": "play football",
          "tag": "sports",
          "user": "63cba48a7ed12a1eb543dd64",
          "createdAt": "2023-01-21T12:08:24.678Z",
          "updatedAt": "2023-01-21T15:35:16.508Z",
          "__v": 0
        },
        {
          "_id": "63cbd60b46317d61cbb31914",
          "title": "tuesday",
          "description": "go afasffd",
          "tag": "gym",
          "user": "63cba48a7ed12a1eb543dd64",
          "createdAt": "2023-01-21T12:09:47.614Z",
          "updatedAt": "2023-01-21T12:09:47.614Z",
          "__v": 0
        }
      ]

      const [notes, setNotes] = useState(initialNotes)

    return(
        <NoteContext.Provider value={{notes, setNotes}} >
            {children}
        </NoteContext.Provider>
    )

}
export default NoteState