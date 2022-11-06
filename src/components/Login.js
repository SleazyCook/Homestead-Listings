import React from 'react';
import {Link} from 'react-router-dom';
// import Register from './Register';

const Login = () => {
  return (
    <div>
      <form>
        Enter username:
        <br />
        <input type="text" />
        <br />

        Enter password:
        <br />
        <input type="password" />
        <br />

        <button type="submit">Login</button>

      </form>
      <p>
        Don't have an account?
        <br />
        <Link to="/register">Click Me</Link>
      </p>
    </div>
  )
}

export default Login;