import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar " style={{backgroundColor:"skyblue"}}>
    <div className="container">
      <a className="navbar-brand" href="/">
      <img src="/weather.png" alt="" width="30" height="24" className="d-inline-block align-text-top"/>
      <span style={{fontWeight:'bold'}}>Weather App</span> 
      </a>
    </div>
  </nav>
  )
}
