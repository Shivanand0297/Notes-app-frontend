import React, { useContext, useState } from "react";
import NoteContext from "../context/notes/NoteContext";

const NoteForm = () => {

  // extracting addNote from the context
  const { addNote } = useContext(NoteContext);

  // state to store the input values
  const [input, setInput] = useState({
    title: "",
    description: "",
    tag: ""
  })

  // function to add note
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("adding note");
    addNote(input.title, input.description, input.tag)

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
      <h1>Add a Note</h1>
      <form onSubmit={handleSubmit} >
        <div className="form-group my-3">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={input.title}
            aria-describedby="emailHelp"
            placeholder="Enter Title"
            onChange={handleInput}
            minLength={5}
            required
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
            minLength={5}
            required
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
            minLength={5}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary my-3" 
        disabled={input.title.length <3 || input.description.length <3}
        >
          Submit
        </button>
      </form>
      <h2 className="my-3">Your Notes</h2>
    </>
  );
};

export default NoteForm;
