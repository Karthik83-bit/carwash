import React from 'react'
import {alert} from 'reactstrap' 
import {Navbar,NavItem,Input} from 'reactstrap'

function NavbarComponent() {
  return (
    <div>
      <Navbar className='my-2' color='dark'>
      <NavItem><Input/></NavItem>
      
        <NavItem>Login</NavItem>
      </Navbar>
    </div>
    
  )
}

export default NavbarComponent