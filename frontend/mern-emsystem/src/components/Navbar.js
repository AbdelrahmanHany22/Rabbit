import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import cart from './images/cart.png'
import user from './images/user.png'
import SignUp from './SignUp/SignUp'
import './navbar.css'

export default function Navbar() {

  const [toggle, setToggle] = useState(false)

  function toggleFunc(){
    setToggle(!toggle)
  }

  return (
    <div className='navbar-body'>
    
            <a href='/' className='navbar-text'>Rabbit</a>

            <div className='navbar-links'>
            
              <div className='navsearch'>
                <input type={'text'} className='navbar-searchbar' />
              </div>
              <Link to={'/Payment'}><img className='cart' alt='' width='35px' src={cart}/></Link>
              <Link to={'/'} className='navbar-link'>Home</Link>
              <a href={'https://www.rabbitmart.com/rabbit-blog/'} className='navbar-link'>Our Blog</a>
              <a href={'https://www.rabbitmart.com/rabbit-values/'} className='navbar-link'>Our Values</a>
              <a href={'https://rabbitmart.breezy.hr/'} className='navbar-link'>Careers</a>
              <img className='user' alt='' width='35px' src={user} onClick={toggleFunc}/>
              
            
            </div>
            
            {toggle && <SignUp toggle={toggleFunc}/>}
        
    </div>
  )
}
