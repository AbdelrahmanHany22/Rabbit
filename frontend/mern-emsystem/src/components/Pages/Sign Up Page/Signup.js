import React, { useState } from 'react'
import './signup.css'
import Hide from '../../images/hide.png'
import Show from '../../images/show.png'

export default function Signup() {

    const [name,setName] = useState()
    const [email, setEmail] = useState()
    const [password,setPassword] = useState()
    const [cnfrmpassword,setCnfrmPassword] = useState()
    const [passwordShown, setPasswordShown] = useState(false);
    const [cnfrmpasswordShown, setCnfrmPasswordShown] = useState(false);


    const HandleSubmit = (e) => {
        e.preventDefault()
        const user={email,password,cnfrmpassword}
  
        fetch('https://localhost:3000', {
          method: 'POST',
          headers: {"Content-Type" : "application/json"},
          body: JSON.stringify(user)
        })
      }

      function start(){
        setPasswordShown(true)
      }
      function end(){
        setPasswordShown(false)
      }

      function cnfrmstart(){
        setCnfrmPasswordShown(true)
      }
      function cnfrmend(){
        setCnfrmPasswordShown(false)
      }

  return (
    <div className='signup-body'>

        <form className='signup-form' onSubmit={HandleSubmit}>

            <input className='signup-input' type='text'
            placeholder='Name' required value={name} onChange={(e) => {setName(e.target.value)}}/>

            <input className='signup-input' type='text'
            placeholder='Email' required value={email} onChange={(e) => {setEmail(e.target.value)}}/>

            <div className='signup-pass'>
            
                <input className='signup-input' type={passwordShown ? "text" : "password"} 
                placeholder='Password' required value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                
                <div className='signup-button-pass' onMouseDown={start} onMouseUp={end}>
                    {passwordShown? <img alt='' src={Hide} />:<img alt='' src={Show} />}
                </div>
                
                <input className='signup-input' type={cnfrmpasswordShown ? "text" : "password"} 
                placeholder='Confirm Password' required value={cnfrmpassword} onChange={(e) => {setCnfrmPassword(e.target.value)}}/>
                
                <div className='signup-button-cnfrm' onMouseDown={cnfrmstart} onMouseUp={cnfrmend}>
                    {cnfrmpasswordShown? <img alt='' src={Hide} />:<img alt='' src={Show} />}
                </div>
            
            </div>
            
            <input type={'submit'} className='signup-input signup-submit' value='Sign up!'/>

        </form>

    </div>
  )
}
