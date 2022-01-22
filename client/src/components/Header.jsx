import React from 'react'
import { NavLink } from 'react-router-dom'
import MountainCard from './MountainCard'

export default function Header(props) {
  return (
    <header>
      <h1 id='name'> Wieners on 14ers </h1>
      <nav >
        <NavLink className = 'nav' to="/">Home</NavLink>
        <NavLink className = 'nav' to="/addDog">Mountain Dogs</NavLink>
        <NavLink className = 'nav' to="/mountains">Mountains</NavLink>
        {/* <NavLink className = 'nav' to="/dogs">Dogs</NavLink> */}

      </nav>
    </header>
   
  )
}