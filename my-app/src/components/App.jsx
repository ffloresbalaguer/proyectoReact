import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from "./Navbar/Navbar";
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Cart from './Cart/Cart';



function App() {
  return (
    
    
    <div className="row">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="Bienvenidos a Manchas Store"/>}></Route>
          <Route path='/category/:id' element={<ItemListContainer greeting="Bienvenidos a Manchas Store"/>}></Route>
          <Route path='/item/:id' element={<ItemDetailContainer/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
        </Routes>      
      </BrowserRouter>
    </div>  

    
      
    
       
  );
}

export default App;