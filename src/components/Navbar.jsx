import React from 'react'
import { Link } from 'react-router-dom'
import { NavBar , Container , Navcon , Logo , Menu , } from '../styles/styles'

const Navbar = () => {
  return (


    <NavBar>

        <Container>
            <Navcon>
                    <Logo to="/">Ratchasri Profile </Logo>
                    <Menu>
                        <li> <Link to="/">Home  </Link></li>
                        <li> <Link to="/about">About Me</Link></li>
                    </Menu>
            </Navcon>
        </Container>

        


    </NavBar>
  )
}

export default Navbar