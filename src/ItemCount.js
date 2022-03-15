import React from 'react'
import {useState} from "react"



const ItemCount = () => {

    
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
    let [carrito , setCarrito] = useState(0)
    const onAdd = () => {
        
        if (stock > 0) {
            setStock(stock - estado)
        }
    
        if (stock > 0 ) {
            setCarrito(carrito + estado)
        }
        

    }
    



  return (
      
      <div className='calculadora'>
        <h4>Este es tu carrito</h4>
        <p>Seleccionaste: {estado}  productos</p>
        <button onClick={suma}>+</button>
        <button onClick={resta}>-</button>
        <button onClick={onAdd}>Agregar a carrito</button>

        <p>Cantidad total de stock: {stock}</p>
        <p>Agregaste {carrito} a tu carrito de compras</p>
    </div>
    
  );
}

export default ItemCount