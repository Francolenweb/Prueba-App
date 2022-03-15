import React from 'react'
import ItemCount from './ItemCount'



const ItemDetail = ({personajes}) => {

    

  return (
    <div className='listaPersonajes'>
        {personajes.map((personajes ) => {

            return <div key={personajes.id} className="card">
                <h4> {personajes.name}</h4>
                <div className='fondoImg'>
                    <img src={personajes.image}></img>
                </div>
                <div>
                    <h5>Detalles</h5>
                     <ul>
                         <li><p> Species: {personajes.species}</p></li>
                         <li><p>Current Situation: {personajes.status}</p></li>
                         <ItemCount/>
                    </ul>
                </div>
                
            </div>
        })}
    </div>
  )
};



export default ItemDetail