import './App.css';
import Inicio from './components/inicio';
import Productos from './components/productos';
import Footer from './components/footer';
import Contacto from './components/contacto';
import {
BrowserRouter as Router,
Route,
Routes,
} from "react-router-dom";
import Header from './components/header';
import Moleton from './components/moleton';
import Remera from './components/remera';
import Hoppy from './components/hoppy';
import Taza from './components/taza';
import Case from './components/case';
import Regalos from './components/regalos';
import Conjuntos from './components/conjuntos';
import Crops from './components/crop';
import Kepis from './components/kepis';
import Cajas from './components/cajas';

  function App(){
  return (
<Router>

<Header/>

<Routes>
    <Route path='/' element ={<Inicio/>}></Route>
    <Route path='Productos' element ={<Productos/>}></Route>
    <Route path='Contacto' element ={<Contacto/>}></Route>
    <Route path='Moleton' element ={<Moleton/>}></Route>
    <Route path='Remera' element ={<Remera/>}></Route>
    <Route path='Hoppy' element ={<Hoppy/>}></Route>
    <Route path='Taza' element ={<Taza/>}></Route>
    <Route path='Case' element ={<Case/>}></Route>
    <Route path='Regalos'element={<Regalos/>}></Route>
    <Route path='Conjuntos'element={<Conjuntos/>}></Route>
    <Route path='Crop'element={<Crops/>}></Route>
    <Route path='Kepis'element={<Kepis/>}></Route>
    <Route path='Cajas'element={<Cajas/>}></Route>
    
</Routes>
<Footer/>
</Router>

  );
}


export default App;