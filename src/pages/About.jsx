import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext'


const About = () => {
  const {state, update} = useContext(NoteContext)

  useEffect(()=>{
    update()
  }, [])
  console.log(state);
  return (
    <div>
      This is {state.name} and class is {state.class}
    </div>
  )
}

export default About