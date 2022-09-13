import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
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
    const [producto, setProductoCard] = useState ([]);
    const {id} = useParams()
    useEffect(() => {
        consultarPromesa(true)
    .then(data=> {
        const producto1 = data.find(producto => producto.id == id)

        setProductoCard(producto1)
    })


    
    
    
    
    
    .catch(error => {
        console.error(error)        
    })
    }, []);





    return (
        <div className="row">
            <ItemDetail detail = {producto}/>
        </div>
    );
}

export default ItemDetailContainer;

/*<ItemDetail nombre = {producto.nombre} image={producto.image} descripcion={producto.descripcion} precio={producto.precio} stock={producto.stock}/>*/