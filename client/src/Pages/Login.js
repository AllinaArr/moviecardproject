import { useState } from "react";

function Login() {
  const [error, setError] = useState();
  const [msg, setMsg] = useState();

  function handleSubmit(event) {
    event.preventDefault();

    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };

    fetch("http://127.0.0.1:5555/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    })
      .then((resp) => {
        if (resp.ok) {
          setMsg("Log in successful!");
        } else {
          setMsg("Log in failed!");
          return Promise.reject(resp);
        }
      })
      .catch((resp) => resp.json())
      .then((data) => setError(data));
  }
  const errorElement = error ? (
    <p style={{ color: "red" }}>{error.error}</p>
  ) : null;

  return (
    <div className='login'>
      {msg ? <p>{msg}</p> : null}
      {errorElement}
      <form onSubmit={handleSubmit} className='login-form'>
        <h1 id='home-bar'>Login</h1>
        <div id='home-container'>
          <input
            type='text'
            placeholder='Username'
            required
            className='input-username'
          />
        </div>
        <div className=''>
          <input
            type='text'
            placeholder='Password'
            required
            className='input-password'
          />
        </div>
        <div className=''>
          <label>
            <input type='checkbox' /> Remember me
          </label>
          <a href='#'>
            <br /> Forgot Password
          </a>
        </div>
        <button className=''>Login</button>

        <div className=''>
          <p>
            Don't have an account?
            <a href='#'>
              {" "}
              <br />
              Register
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
