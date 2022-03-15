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
                    <NavLink to="/character/?name=rick" className='nav__link'>Ricks</NavLink>
                 </li>
                 <li>
                    <NavLink to="/character/?name=morty">Mortys</NavLink>
                    
                 </li>
                 <li>
                    <NavLink to="/character/?species=alien">Aliens</NavLink>
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