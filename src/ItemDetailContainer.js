import React from 'react'
import ItemDetail from './ItemDetail'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "./styles.css"
import 'react-toastify/dist/ReactToastify.css';



const ItemDetailContainer = () => {

    const [personajes, setPersonajes] = useState([])
    const [loading, setLoading] = useState(true);
    const {idNombre} = useParams()

    useEffect(()=>{

        fetch(`https://rickandmortyapi.com/api/character/${idNombre}`)
        .then((response)=>{
            return response.json()
        })
        .then((respuesta)=>{
            setPersonajes(respuesta)
        })
        .catch(()=>{
        toast.error("Error al cargar el producto")
        })
        .finally(()=>{
        setLoading(false)
        })

    },[])

    if(loading){
        return <h1>Cargando...</h1>
    }else{
        return (
        <div>
            <h3>El Producto seleccionado:</h3>
            <div >
                <ItemDetail personajes={personajes}/>
            </div>
        </div>
        )
    }

}

export default ItemDetailContainer