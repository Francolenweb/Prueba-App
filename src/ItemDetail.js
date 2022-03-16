import React from 'react'
import ItemCount from './ItemCount'



const ItemDetail = ({personajes}) => {

    

  return (
    <div className='personajeDetalle'>
        <div className='cartaDetalle' >
            <div className='desc'>
                <h4> {personajes.name}</h4>
                <div className='imagenDetalle'>
                    <img src={personajes.image}></img>
                </div>
            </div>
            
            <div className='detalles'>
                <h5>Detalles</h5>
                    <ul className='check-list'>
                        <li><p> Origen: {personajes.origin.name}</p></li>
                        <li><p>Situación Actual: {personajes.status}</p></li>
                        <li><p>Especie: {personajes.species}</p></li>
                        <ItemCount/>
                    </ul>
            </div>
                
        </div>
        
    </div>
  )
};



export default ItemDetail