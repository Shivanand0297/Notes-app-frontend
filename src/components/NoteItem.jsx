import React, { useContext } from "react";
import { FaTrash, FaEdit } from "react-icons/fa"
import NoteContext from "../context/notes/NoteContext";

const NoteItem = ({ note }) => {

  const { deleteNote } = useContext(NoteContext)

  return (
    <div className="col-md-3 m-3 p-1 ">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{ note.title }</h5>
          <p className="card-text"> {note.description} </p>
          <p className="card-text"> {note.tag} </p>
          <div className="d-flex justify-content-between align-items-center">
          <FaTrash color="red" cursor={"pointer"} onClick={()=>(deleteNote(note._id))} />
          <FaEdit cursor={"pointer"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
