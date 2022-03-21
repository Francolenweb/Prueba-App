import React from 'react'
import {useState} from "react"



const ItemCount = ({onAdd}) => {

    
    let [estado, setEstado] = useState(1)

    const suma = () => {
        if (estado < stock ) {
            setEstado(estado + 1)
        }

        
    };

    const resta = () => {

        if (estado > initial ) {
            setEstado(estado - 1)
        }
        
    };


    const initial = 1
    let [stock, setStock] = useState(10) 
    const agregarCarrito = () => {
        
       onAdd(estado)
       
       if (estado <= stock){
           setStock(stock - estado)
       }
        

    }
    



  return (
      
      <div className='calculadora'>
        <h4>Este es tu carrito</h4>
        <p>Seleccionaste: {estado}  productos</p>
        <button onClick={suma}>+</button>
        <button onClick={resta}>-</button>
        <button onClick={agregarCarrito}>Agregar a carrito</button>

        <p>Cantidad total de stock: {stock}</p>
    </div>
    
  );
}

export default ItemCount