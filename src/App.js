import Navbar from './navbar'
import Main from './main'
import './styles.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (

    <BrowserRouter>
      <ToastContainer/>
      <Navbar />
      <Main/>
    </BrowserRouter>
  );
}

export default App;
