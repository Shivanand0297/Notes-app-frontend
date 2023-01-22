import React from 'react'
import Note from '../components/Note'
import NoteForm from '../components/NoteForm'

const Home = () => {

  return (
    <div className='my-3'>
      <NoteForm/>
      <Note/>
    </div>
  )
}

export default Home