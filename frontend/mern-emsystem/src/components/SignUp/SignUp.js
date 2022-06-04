import React, { useState } from 'react'
import Hide from '../images/hide.png'
import Show from '../images/show.png'
import './signup.css'

export default function SignUp({toggle}) {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password,setPassword] = useState()

    const HandleSubmit = (e) => {
      e.preventDefault()
      const user={name,email,password}

      fetch('https://localhost:3000', {
        method: 'POST',
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(user)
      })
    }

    const [passwordShown, setPasswordShown] = useState(false);

    function start(){
      setPasswordShown(true)
    }
    function end(){
      setPasswordShown(false)
    }

  return (
    <div className='signup-body'>

        <div className='text'>

            Welcome To Rabbit!

        </div>

        <div className='inputs'>

            <div className='signup-close' onClick={toggle}>X</div>

              <form onSubmit={HandleSubmit}>

                <input className='input' type='text' 
                  placeholder='Name' required value={name} onChange={(e) => {setName(e.target.value)}}/>

                <input className='input' type='text'
                  placeholder='Email' required value={email} onChange={(e) => {setEmail(e.target.value)}}/>

                  <input className='input' type={passwordShown ? "text" : "password"} 
                  placeholder='Password' required value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                  
                <div className=' button' onMouseDown={start} onMouseUp={end}>{passwordShown? <img alt='' src={Hide} />:<img alt='' src={Show} />}</div>

                <input type={'submit'} className='input submit' value='Sign Up!'/>
            
              </form>

        </div>
        
    </div>
  )
}
