import React from 'react'
import "./login.scss"
import { useState } from 'react'
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import {useDispatch} from "react-redux"
import { login } from '../../redux/apiCall';




const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
     login(dispatch, {username, password} )
     
  }

  return (


    <div className='login'>
      <div className="loginWrapper">
        <div className="loginTitle"> Login To Your Account</div>
        <div className="loginItem">
          <div className='itemTitle'><PersonIcon className='icon' /><label htmlFor="">UserName</label></div>
          <input type="text"
            placeholder='userName'
            onChange={e => setUsername(e.target.value)}

          />
        </div>
        <div className="loginItem">
          <div className='itemTitle'><LockIcon className='icon' /><label htmlFor="">Password</label></div>
          <input type="password"
            placeholder='password'
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <button className='loginBtn' onClick={handleClick}>Login</button>
      </div>
    </div>

  )
}

export default Login