import {React, useState, useEffect} from 'react';
import productos from '../Data/Data';


function consultarPromesa(confirmacion) {
    return new Promise ((res,rej) => {
        if (confirmacion) {
            res(productos)
        } else {
            rej("Accesso denegado")
        }
    }) 
}




const ItemDetail = () => {

    const [itemDetail, setItemDetail] = useState ([]);

    useEffect(() => {
        consultarPromesa(true)
    .then(producto => {
            const productosJSX = producto.map((producto, indice) =>
            <div>
                <div className="card mb-3" key={indice}>
                    <h3 className="card-header">{producto.nombre}</h3>
                    <div className="card-body">
                </div>
                <img src={producto.image} />
                <div className="card-body">
                    <p className="card-text">Descripción: {producto.descripcion}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Precio: ${producto.precio}</li>
                    <li className="list-group-item">Stock:{producto.stock}</li>
                </ul>
                <div className="card-footer text-muted">
                    La Gata Manchas no se responsabiliza por daños colaterales
                </div>
            </div>
        </div>
        )
        setItemDetail(productosJSX)
        })
        .catch(error => {
            console.error(error)
        
        })
    
    
    }, []);
    




    return (
        <>
            {itemDetail}
        </>
    )
}

export default ItemDetail;