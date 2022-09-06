import {React, useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
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





const ItemDetailContainer = () => {

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



    return (
        <div>
            <ItemDetail detail={productos}/>
        </div>
    );
}

export default ItemDetailContainer;
