import React from 'react'
import { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext'

const Home = () => {

  const {notes, setNotes} = useContext(NoteContext)




  return (
    <div className='my-3'>
        <h1>Add a Note</h1>
        <form>
          <div class="form-group my-3">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
          </div>
          <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        <h2 className='my-3'>Your Notes</h2>
        { notes.map(note=>(
          <p>{note.title}</p>
        )) }
    </div>
  )
}

export default Home