import {React, useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import arrayProductos from '../Data/Data';
import {useParams} from 'react-router-dom';

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

    const [productoCard, setProductoCard] = useState([]); 
    const {id} = useParams()   

    useEffect(() => {
        consultarPromesa(true)
    .then(data=> {
        const productoI = data.find (productoI => productoI.id == id)        

        setProductoCard(productoI)
    })



    .catch(error => {
        console.error(error)        
    })
    }, []);



    return (
        <div>
            <ItemDetail detail={productoCard}/>
        </div>
    );
}

export default ItemDetailContainer;
