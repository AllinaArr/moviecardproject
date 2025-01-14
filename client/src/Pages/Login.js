import { useState } from "react";

function Login() {
  const [error, setError] = useState(null);
  const [msg, setMsg] = useState(null);

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
          setError(null);
          return resp.json();
        } else {
          return resp.json().then((data) => {
            setMsg("Log in failed!");
            setError(data.error || "An error occurred");
            throw new Error(data.error || "An error occurred");
          });
        }
      })
      .catch((err) => {
        console.error("Login error:", err);
      });
  }

  const errorElement = error ? <p style={{ color: "red" }}>{error}</p> : null;
  const messageElement = msg ? <p>{msg}</p> : null;

  return (
    <div className='login'>
      {messageElement}
      {errorElement}
      <form onSubmit={handleSubmit} className='login-form'>
        <h1 id='login-bar'>Login</h1>
        <div id='login-container'>
          <input
            type='text'
            name='username'
            placeholder='Username'
            required
            className='input-username'
          />
        </div>
        <div>
          <input
            type='password'
            name='password'
            placeholder='Password'
            required
            className='input-password'
          />
        </div>
        <div className='login-para'>
          <label>
            <input type='checkbox' /> Remember me
          </label>
          <a href='#' className='login-para'>
            <br /> Forgot Password
          </a>
        </div>
        <button type='submit' className='login-btn'>
          Login
        </button>

        <div className='login-para'>
          <p>
            Don't have an account?
            <a href='#' className='login-para'>
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
