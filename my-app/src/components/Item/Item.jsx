import {React, useState, useEffect} from 'react';

const productos = [
    {nombre:"Arañazo", precio:20, stock:2},
    {nombre:"Mordisco", precio:60, stock:1},
    {nombre:"Bunnykick", precio:80, stock:2}
]

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

   /* consultarPromesa(true)
    .then(producto => {
        setItem(producto)
    })
    .catch(error => {
        console.error(error)
    })

    console.log(productos) */

export default Item;

/*<div className="card border-primary mb-3" style={{maxWidth: '20rem'}}>
  <div className="card-header">Header</div>
  <div className="card-body">
    <h4 className="card-title">Primary card title</h4>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>*/