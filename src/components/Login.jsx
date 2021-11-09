import React, { useState} from "react";

function Login({ user, setUser }) {

    const [ log, setLog] = useState({
        username: '',
        password: ''
    })

    const changeLog = (event) => {
        setLog({
            ...log,
            [event.target.name]: event.target.value
        })
    }

    const submitData = (event) => {
        event.preventDefault();
        console.log(log);
        event.target.reset();
    }

  return (
    <div className="log container shadow p-3 mb-5 border">
      <h1 className="text-center fw-bold">Log In</h1>
      <form onSubmit={submitData}>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            name="username"
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={changeLog}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your Username with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            name="password"
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={changeLog}
          />
        </div>
        <button type="submit" className="btn btn-secondary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
