import ItemList from "./ItemList"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { useParams } from "react-router-dom"
import "./styles.css"

const ItemListContainer = ({nombre }) => {
 
  const [personajes, setPersonajes] = useState([])
  const {idPersonaje} = useParams()
  const [loading, setLoading] = useState(true)


  useEffect(() => {
        
    fetch("https://rickandmortyapi.com/api/character")
    .then((response)=>{
        return response.json()
    })
    .then((resultado)=>{
      setPersonajes(resultado)
    })
    .catch(()=>{
        toast.error("Error al cargar los productos")
    })
    .finally(()=>{
        setLoading(false)
    })
    
  },[idPersonaje])

  if(loading){
    return <h1>Cargando...</h1>
  }else{
    return <div>
              <h2>Bienvenido {nombre}!</h2>
              <p>Esta es la pagina oficial de la tienda. Encontra todos nuestros productos aqui!</p>
              <div className='cuerpo'>
                
                <ItemList personajes={personajes}/>
              </div>
            </div>
  }
}

export default ItemListContainer