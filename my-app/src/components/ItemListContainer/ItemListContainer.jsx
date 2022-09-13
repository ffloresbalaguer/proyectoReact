import {React, useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Counter from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList'
import arrayProductos from '../Data/Data';




/*function consultarPromesa(confirmacion) {
    return new Promise ((res,rej) => {
        if (categoria) {
            res(arrayProductos.filter(item => item.category === category))
        } else if(confirmacion){
            res(arrayProductos)
        }
        else {
            rej("Accesso denegado")
        }
    }) 
}*/


const ItemListContainer = ({greeting}) => {

    const [productos, setProductos] = useState([]);

    const {categoria} = useParams()

    const getProducts = () => new Promise ((resolve, reject) => {
        if (categoria) {
            resolve(arrayProductos.filter(item => item.category == categoria))
        } else {
            resolve(arrayProductos)
        }
    }) 
    console.log(categoria)


    
    useEffect(() => {
        getProducts()
    .then(productos=> 

        setProductos(productos)
    )
    .catch(error => 
        console.error(error)        
    )
    }, [categoria]);
    
    
    
    
   
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