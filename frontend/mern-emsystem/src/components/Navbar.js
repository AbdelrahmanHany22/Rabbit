import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { Link,useNavigate } from 'react-router-dom'

import cart from './images/cart.png'
import user from './images/user.png'
import Login from './Login/Login'

import './navbar.css'

export default function Navbar() {

  const [toggle, setToggle] = useState(false)

  const navigate = useNavigate()

  function toggleFunc(){
    if(cookies.jwt === undefined){
    setToggle(!toggle)
  }else{
    setToggle(false)
  }
  }

  const [search, setSearch] = useState()
  const [data,setData] = useState([])
  const [cookies, setCookie, removeCookie] = useCookies(['user']);


  function handleChange(event){
   setSearch(event.target.value)
  }

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/api/v1/products/match/${search}`)
     .then((response) => response.json())
     .then(datatest => {

      

       if(datatest.data !== undefined){
         var array = datatest.data.map(item => {
         return({name:item.name,id:item.id})
       })  
       
       setData(array)}
       else{
         setData([])
       }
     })

    
   }, [search ]);

   const results = (
     data.map(item => {
       return (
        <Link to={`/Product/${item.id}`}>

       <div className='search-results-item'>
         {item.name}
       </div>
       </Link>)
     })
   )

   


   async function handleClick(){
     
    try {
      
      const token = cookies.jwt

      const config = {

        "headers": { "Authorization": `Bearer ${token}` },


      };

      console.log(token);

      const user = await axios.get('http://127.0.0.1:5001/api/v1/guestusers/getcurrentuser',config)

      console.log(user);

      navigate('/Payment')
      
      
    } catch (error) {

      console.log(error);

      navigate('/GuestSignUp')
      
    }


   }


  return (
    <div className='navbar-body'>
    
            <a href='/' className='navbar-text'>Rabbit</a>

            <div className='navbar-links'>
            
              <div className='navsearch'>

                <input type={'text'} className='navbar-searchbar' onChange={handleChange}/>
                <div className='search-results'>{results}</div>

              </div>

              <img className='cart' alt='' width='35px' src={cart} onClick={handleClick}/>
              <Link to={'/'} className='navbar-link'>Home</Link>
              <a href={'https://www.rabbitmart.com/rabbit-blog/'} className='navbar-link'>Our Blog</a>
              <a href={'https://www.rabbitmart.com/rabbit-values/'} className='navbar-link'>Our Values</a>
              <a href={'https://rabbitmart.breezy.hr/'} className='navbar-link'>Careers</a>
              <img className='user' alt='' width='35px' src={user} onClick={toggleFunc}/>
              
            
            </div>
            
            {toggle && <Login toggle={toggleFunc}/>}
        
    </div>
  )
}
