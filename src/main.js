
import { Route, Routes } from 'react-router-dom';
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';


const Main = () => {
    return (
    
    <Routes>
        <Route path="/" element={<ItemListContainer nombre="Humano"/>} />
        <Route path="/nombres/:idNombre" element={<ItemListContainer/>} />
        <Route path="/character/:idPersonaje" element={<ItemDetailContainer/>} />
    </Routes>
        
    );
}

export default Main;