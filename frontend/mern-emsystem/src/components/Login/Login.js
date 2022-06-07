import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Hide from '../images/hide.png'
import Show from '../images/show.png'
import axios from 'axios'
import {useCookies} from 'react-cookie'
import './login.css'

export default function Login({toggle}) {

    const [email, setEmail] = useState()
    const [password,setPassword] = useState()
    const [cookies, setCookie, removeCookie] = useCookies(['user']);

    const HandleSubmit = async (e) => {
      e.preventDefault()
      const user={
        'email':email,
        'password':password
    }

    const result = await axios.post("http://127.0.0.1:5001/api/v1/users/login/",user)

    const token = result.data.token

    setCookie('jwt',token)
    
    window.location.reload()
      
    }

    const [passwordShown, setPasswordShown] = useState(false);

    function start(){
      setPasswordShown(true)
    }
    function end(){
      setPasswordShown(false)
    }

  return (
    <div className='login-body'>

        <div className='login-inputs'>

              <form className='login-form' onSubmit={HandleSubmit}>

                <input className='login-input' type='text'
                placeholder='Email' required value={email} onChange={(e) => {setEmail(e.target.value)}}/>

                <div className='login-pass'>
                  
                  <input className='login-input' type={passwordShown ? "text" : "password"} 
                  placeholder='Password' required value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                  
                  <div className='login-button' onMouseDown={start} onMouseUp={end}>{passwordShown? <img alt='' src={Hide} />:<img alt='' src={Show} />}</div>
                
                </div>
                
                <input type={'submit'} className='login-input login-submit' value='Login'/>

              </form>

              <div className='login-bottom-text'>
              
                <p className='login-text'>Don't Have An Account?</p>
                <Link to={'/Signup'} className='login-link' onClick={toggle}>Sign up!</Link>
              
              </div>

        </div>
        
    </div>
  )
}
