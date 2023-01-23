import NoteContext from "../context/notes/NoteContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import React, { useContext, useEffect, useRef, useState } from "react";
import NoteItem from "./NoteItem";
import { useNavigate } from "react-router-dom";

const Note = () => {
  const { notes, getAllNotes, editNote } = useContext(NoteContext);
  const navigate = useNavigate()
  // state to store the input values
  const [input, setInput] = useState({
    id: "",
    title: "",
    description: "",
    tag: ""
  })

  const toggleModel = useRef(null);

  useEffect(() => {
    if(localStorage.getItem("token")){
      getAllNotes();
    }else{
      navigate("/login")
    }
    // eslint-disable-next-line
  }, [localStorage.getItem("token")]);

  const updateNote = (currentNote) => {
    toggleModel.current.click();
    console.log(currentNote);
    setInput({
      ...input,
      id: currentNote._id, 
      title: currentNote.title, 
      description: currentNote.description, 
      tag: currentNote.tag 
    })
  };

   

  // function to add note
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("updating note", input);
    editNote(input.id, input.title, input.description, input.tag)
    // reseting every fields
    setInput({
      ...input,
      title: "",
      description: "",
      tag: ""
    })

  };

  // taking input onChange
  const handleInput = (e) =>{
    setInput({
      ...input, [e.target.name] : e.target.value
    })
  }

  return (
    <>
      <button
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        ref={toggleModel}
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Update Note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {/* update Form */}
              <form>
                <div className="form-group my-3">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    value={input.title}
                    minLength={5}
                    required
                    aria-describedby="emailHelp"
                    placeholder="Enter Title"
                    onChange={handleInput}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    name="description"
                    value={input.description}
                    placeholder="Description"
                    onChange={handleInput}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">tag</label>
                  <input
                    type="text"
                    className="form-control"
                    id="tag"
                    name="tag"
                    value={input.tag}
                    placeholder="tag"
                    onChange={handleInput}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button 
              type="button" 
              className="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={handleSubmit}
              disabled={input.title.length <3 || input.description.length <3}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        { notes.length === 0 && "No notes to display" }
        {notes.map((note, index) => (
          <NoteItem
            note={note}
            key={note._id + index}
            updateNote={updateNote}
          />
        ))}
      </div>
    </>
  );
};

export default Note;
