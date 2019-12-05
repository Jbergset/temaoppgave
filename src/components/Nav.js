import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'

const Nav = () => {
    return(
    <header>
        <nav className="top-nav">
          <NavLink exact to = "/"  className="main-nav" activeClassName="main-nav-active">Home</NavLink>
          <NavLink exact to = "./art" className="main-nav" activeClassName="main-nav-active">Art</NavLink>
          <NavLink exact to = "./meme" className="main-nav" activeClassName="main-nav-active">Memes</NavLink>
          <NavLink exact to = "./motivasjon" className="main-nav" activeClassName="main-nav-active">Motivasjon</NavLink>
          <NavLink exact to = "./search" className="main-nav" activeClassName="main-nav-active">Søk</NavLink>
          <NavLink exact to = "./favoritter" className="main-nav" activeClassName="main-nav-active">Favoritter</NavLink> 
      </nav>
    </header>
    )
}

export default Nav