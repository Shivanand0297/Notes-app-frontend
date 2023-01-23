import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { HOST } from '../config/Config'

const Signup = () => {
    const navigate = useNavigate()
    const [input, setInput] = useState({ name: "", email: "", password: ""})

    const handleChange = (e) =>{
        setInput({ ...input, [e.target.name] : e.target.value })
    }

    const loginFunction = async () =>{
        // api
        console.log(`${HOST}/api/auth/createuser`);
        const res = await fetch(`${HOST}/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            }, 
            body: JSON.stringify({ name: input.name, email: input.email, password: input.password})
          })

          const data = await res.json()
          console.log(data);

        //   if request does not result into success
          if(!data.success){
            alert("Please Login With Correct Credentials")
          }

        //   on successfull response setting token in the localStorage
        localStorage.setItem("token", data.user?.token)

        navigate("/")
         
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        loginFunction() 
        setInput({name: "", email: "", password: "" })
    }

    

  return (
    <div>
        <form onSubmit={handleSubmit} >
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Email address
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              aria-describedby="emailHelp"
              onChange={handleChange}
              value={input.name}
            />
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              aria-describedby="emailHelp"
              onChange={handleChange}
              value={input.email}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              onChange={handleChange}
              value={input.password}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Create Account
          </button>
        </form>
      </div>
  )
}

export default Signup