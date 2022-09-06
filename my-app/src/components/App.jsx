import './App.css';
import Navbar from "./Navbar/Navbar";
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="Bienvenidos a Manchas Store"  />
      <ItemDetailContainer/>
    </div>
       
  );
}

export default App;
