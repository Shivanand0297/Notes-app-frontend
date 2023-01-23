import React, { useState } from "react";
import { HOST } from "../config/Config";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
    const [input, setInput] = useState({ email: "", password: ""})

    const handleChange = (e) =>{
        setInput({ ...input, [e.target.name] : e.target.value })
    }

    const loginFunction = async () =>{
        // api
        console.log(`${HOST}/api/auth/login`);
        const res = await fetch(`${HOST}/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            }, 
            body: JSON.stringify({ email: input.email, password: input.password})
          })

          const data = await res.json()
          console.log(data);

        //   if request does not result into success
          if(!data.success){
            return alert("Please Login With Correct Credentials")
          }

        //   on successfull response setting token in the localStorage
        localStorage.setItem("token", data.user?.token)

        navigate("/")
         
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        loginFunction() 
        setInput({ email: "", password: "" })
    }

  return (
    <>
      <div className="container" >
        <form onSubmit={handleSubmit} >
          <div className="mb-3">
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
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
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
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
