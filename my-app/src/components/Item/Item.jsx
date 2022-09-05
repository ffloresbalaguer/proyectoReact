import React from 'react';






const Item = ({producto}) => {  
  return (
    <div className="card border-primary mb-3" key={producto.id} style={{maxWidth: '20rem'}}>
         <div className="card-header">{producto.nombre}</div>
                <div className="card-body">
                <p className="card-text">Precio: ${producto.precio}</p>
                <p className="card-text">Stock :{producto.stock}</p>
         </div>
    </div>
  )
}


export default Item;