import React from 'react'
import Item from './Item'
 
const ItemList = ({personajes}) => {
    

  return (
    <>
      <h3>Nuestro listado de Productos!</h3>
      <div className='listado'>
          {personajes.map((item) => {

              return <div className="card">
              <Item key={item.name}  personajes={item}/>
              </div>
          })}
      </div>
    </>
    
  )
}

export default ItemList
