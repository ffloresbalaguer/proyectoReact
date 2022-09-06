import {React, useState, useEffect} from 'react'
import Counter from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList'
import arrayProductos from '../Data/Data';




function consultarPromesa(confirmacion) {
    return new Promise ((res,rej) => {
        if (confirmacion) {
            res(arrayProductos)
        } else {
            rej("Accesso denegado")
        }
    }) 
}


const ItemListContainer = ({greeting}) => {

    const [productos, setProductos] = useState([]);    

    useEffect(() => {
        consultarPromesa(true)
    .then(producto=> {

        setProductos(producto)
    })
    .catch(error => {
        console.error(error)        
    })
    }, []);
    
    
    
    
   
    function onAdd (count){
        alert(`Te estas llevando ${count} Manchas`)

    }


    return (
        <div>
            <h1>{greeting}</h1>
            <div>
                <Counter stock={7} onAdd={onAdd}/>                 
            </div>
            <div>
                <ItemList list= {productos}/>
            </div>
        </div>
        
    )
}

export default ItemListContainer