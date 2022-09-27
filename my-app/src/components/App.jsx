import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from "./Navbar/Navbar";
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import CartView from './CartView/CartView';
import Checkout from './Checkout/Checkout';
import CartContext from './Context/CartContext';



function App() {
  return (
    
    
    <div className="">
      <CartContext>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="Bienvenidos a Manchas Store"/>}></Route>
          <Route path='/category/:id' element={<ItemListContainer greeting="Bienvenidos a Manchas Store"/>}></Route>
          <Route path='/item/:id' element={<ItemDetailContainer/>}></Route>
          <Route path='/cart' element={<CartView/>}></Route>
          <Route path='/checkout' element={<Checkout/>}></Route>
        </Routes>      
      </BrowserRouter>
      </CartContext>
    </div>  

    
      
    
       
  );
}

export default App;