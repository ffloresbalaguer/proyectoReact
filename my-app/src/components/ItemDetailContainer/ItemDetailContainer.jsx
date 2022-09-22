import { getDoc } from 'firebase/firestore';
import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import db from '../../services/firebase';
import { doc } from 'firebase/firestore';
/*import arrayProductos from '../Data/Data';*/



/*function consultarPromesa(confirmacion) {
    return new Promise ((res,rej) => {
        if (confirmacion) {
            res(arrayProductos)
        } else {
            rej("Accesso denegado")
        }
    }) 
}*/





const ItemDetailContainer = () => {
    const [producto, setProductoCard] = useState ([]);
    const {id} = useParams()

    const getProducto = async(idItem) => {
        try {
            const document = doc(db, "Items", idItem)
            const response = await getDoc(document)
            const result = {id: response.id, ...response.data()}
            setProductoCard(result)
            
        } catch (error) {
            console.log(error)
            
        }

    }

    useEffect(() => {
        getProducto(id)
    }, []);
    
    
    
    /*useEffect(() => {
        consultarPromesa(true)
    .then(data=> {
        const producto1 = data.find(producto => producto.id == id)

        setProductoCard(producto1)
    })
    
    .catch(error => {
        console.error(error)        
    })
    }, []);*/





    return (
        <div className= 'row'>
            <ItemDetail detail = {producto}/>
        </div>
    );
}

export default ItemDetailContainer;

/*<ItemDetail nombre = {producto.nombre} image={producto.image} descripcion={producto.descripcion} precio={producto.precio} stock={producto.stock}/>*/