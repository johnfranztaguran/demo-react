import React from 'react';

const LoginBox = (props) => {
  const {login, signup, handleChangeEm, handleChangePass} = props
      return (
        <div className="inner-container">
          <div className="header">
            Login
          </div>
          <div className="box">
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                onChange={handleChangeEm}
                type="text"
                name="email"
                className="login-input"
                placeholder="email"/>
            </div>
  
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
              onChange={handleChangePass}
                type="password"
                name="password"
                className="login-input"
                placeholder="Password"/>
            </div>
  
            <button type="button" className="login-btn" onClick={login}>Login</button>
            <button type="button" className="login-btn" onClick={signup}>SignUp</button>
          </div>
          <div>{props.error.message}</div>
        </div>
      )
    }
  export default LoginBox
 