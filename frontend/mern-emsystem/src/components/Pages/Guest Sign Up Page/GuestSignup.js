import React, { useEffect, useState } from 'react'
import '../Sign Up Page/signup.css'
import { useNavigate } from 'react-router-dom'

import {useCookies} from 'react-cookie'

import axios from 'axios'

export default function Signup() {

  const navigate = useNavigate()

    const [name,setName] = useState()
    const [email, setEmail] = useState()
    const [addressDescription, setAddressDescription] = useState()
    const [cookies, setCookie, removeCookie] = useCookies(['user']);


    const [navLng, setNavLng] = useState(31.23717403273176)
    const [navLat, setNavLat] = useState(30.04515827528266)
          
         useEffect(() => {
  
          navigator.geolocation.getCurrentPosition((position) => {
  
              setNavLng(position.coords.longitude)
              setNavLat(position.coords.latitude)
  
          })
        },[])



    const HandleSubmit = async (e) => {
        e.preventDefault()
        
        let user={
          "name":`${name}`,
          "email":`${email}`,
          "addressCoordinates": [`${navLng}`,`${navLat}`],
          "addressDescription": `${addressDescription}`
        }

        const result = await axios.post("http://127.0.0.1:5001/api/v1/guestusers/createguest",user)

        const token = result.data.token

        setCookie('jwt',token)

        navigate('http://127.0.0.1:3000/Payment')

      }

  return (
    <div className='signup-body'>

        <form className='signup-form' onSubmit={HandleSubmit}>

            <input className='signup-input' type='text'
            placeholder='Name' required value={name} onChange={(e) => {setName(e.target.value)}}/>

            <input className='signup-input' type='text'
            placeholder='Email' required value={email} onChange={(e) => {setEmail(e.target.value)}}/>

            <input className='signup-input' type='text'
            placeholder='Address Description' required value={addressDescription} onChange={(e) => {setAddressDescription(e.target.value)}}/>

            
            
            <input type={'submit'} className='signup-input signup-submit' value='Confirm'/>

        </form>

    </div>
  )
}
