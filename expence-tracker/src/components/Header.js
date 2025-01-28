import React from 'react'
import logo from '../assets/img/img2.jpg'

function Header() {
  return (
    <div className='header'>
      <img src={logo}/>
      <h2>Expence Tracker</h2>
    </div>
  )
}

export default Header
