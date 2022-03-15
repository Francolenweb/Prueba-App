import React from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'

 

const Item = ({personajes}) => {

    

  return (
    
    <div>
      <h4> {personajes.name}</h4>
      <div className='fondoImg'>
        <img src={personajes.image}></img>
      </div>
      <Link to={`/character/${personajes.name}`}>ver detalle</Link>
      <ItemCount/>
      {console.log(personajes.id)}
                      
    </div>
  )
}

export default Item