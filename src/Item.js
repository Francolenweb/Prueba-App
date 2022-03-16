import React from 'react'
import { Link } from 'react-router-dom'


 

const Item = ({personajes}) => {

    

  return (
    
    <div>
      <h4> {personajes.name}</h4>
      <div className='fondoImg'>
        <img src={personajes.image}></img>
      </div>
      <Link to={`/character/${personajes.id}`} className='button-50'>Ver Detalle</Link>

      {console.log(personajes.id)}
                      
    </div>
  )
}

export default Item