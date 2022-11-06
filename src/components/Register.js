import React from 'react';

const Register = () => {
  return (
    <div>
      <form>
        Enter new username:
        <br />
        <input type="text" />
        <br />

        Enter new password:
        <br />
        <input type="password" />
        <br />

        <button type="submit">Register</button>

      </form>
    </div>
  )
}

export default Register;