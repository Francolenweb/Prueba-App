import React from 'react'
import Item from './Item'
 
const ItemList = ({personajes}) => {
    

  return (
    <>
      <h3>Nuestro listado de Productos!</h3>
      <div className='listado'>
          {personajes.map((item) => {

              return <div key={item.id} className="card">
                        <Item personajes={item}/>
                      </div>
          })}
      </div>
    </>
    
  )
}

export default ItemList
