import React from 'react'
import CartWidget from './cartwidget'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
      
     <header>
         <h1><Link to="/"> LOGO</Link> </h1>
         <nav >
             <ul>
                 <li>
                    <NavLink to="/nombres/?name=rick" className='nav__link'>Ricks</NavLink>
                 </li>
                 <li>
                    <NavLink to="/nombres/?name=morty">Mortys</NavLink>
                    
                 </li>
                 <li>
                    <NavLink to="/nombres/?name=jerry">Jerrys</NavLink>
                 </li>
                 <li>
                   <NavLink to="Carrito"><CartWidget/></NavLink> 
                 </li>
             </ul>
         </nav>
     </header>
  )
}

export default Navbar