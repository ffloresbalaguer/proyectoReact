import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from "./Navbar/Navbar";
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import CartView from './CartView/CartView';
import CartContext from './Context/CartContext';



function App() {
  return (
    
    
    <div className="row">
      <CartContext>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="Bienvenidos a Manchas Store"/>}></Route>
          <Route path='/category/:id' element={<ItemListContainer greeting="Bienvenidos a Manchas Store"/>}></Route>
          <Route path='/item/:id' element={<ItemDetailContainer/>}></Route>
          <Route path='/cart' element={<CartView/>}></Route>
        </Routes>      
      </BrowserRouter>
      </CartContext>
    </div>  

    
      
    
       
  );
}

export default App;