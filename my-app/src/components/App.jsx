import './App.css';
import Navbar from "./Navbar/Navbar";
import ItemListContainer from './ItemListContainer/ItemListContainer';
import Dolar from "./Dolar/Dolar.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="Bienvenidos a Manchas Store"  />
      <Dolar/>

    </div>
       
  );
}

export default App;
