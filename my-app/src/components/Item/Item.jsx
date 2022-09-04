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


const Item = () => {
   
    const [Item, setItem] = useState([]);

    

    useEffect(() => {
        consultarPromesa(true)
    .then(producto=> {
        const productosJSX = producto.map((producto, indice) =>
            <div className="card border-primary mb-3" key={indice} style={{maxWidth: '20rem'}}>
                <div className="card-header">{producto.nombre}</div>
                    <div className="card-body">
                    <p className="card-text">Precio: ${producto.precio}</p>
                    <p className="card-text">Stock :{producto.stock}</p>
                </div>
            </div>                     
        )
        setItem(productosJSX)
    })
    .catch(error => {
        console.error(error)        
    })
    }, []);
    
   



  return (
    <>
    {Item}
    </>
  )
}



export default Item;