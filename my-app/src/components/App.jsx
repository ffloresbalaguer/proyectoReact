import './App.css';
import Navbar from "./Navbar/Navbar";
import ItemListContainer from './ItemListContainer/ItemListContainer';


function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="Bienvenidos a Manchas Store"  />
    </div>
       
  );
}

export default App;
