import React from 'react';
import {Link} from 'react-router-dom';






const Item = ({producto,indice}) => {  
  return (
    <div className="card border-primary mb-3" key={indice} style={{maxWidth: '20rem'}}>
         <div className="card-header">{producto.nombre}</div>
                <div className="card-body">
                <p className="card-text">Precio: ${producto.precio}</p>
                <p className="card-text">Stock :{producto.stock}</p>
                <button className="btn btn-dark"><Link className='nav-link' to={'/item/' + producto.id}>Ver Detalle</Link></button>                
         </div>
    </div>
  )
}


export default Item;