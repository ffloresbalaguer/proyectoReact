import React from 'react';
import {Link} from 'react-router-dom';






const Item = ({producto,indice}) => {  
  return (
    <div className="card border-primary mb-3 m-4" key={indice} style={{maxWidth: '20rem'}}>
         <div className="card-header">{producto.nombre}
            <div className="card-body">
                <img src={producto.image} alt="" />
                <p className="card-text">Precio: ${producto.precio}</p>
                <p className="card-text">Stock :{producto.stock}</p>
                <button className="btn btn-dark"><Link className='nav-link' to={'/item/' + producto.id}>Ver Detalle</Link></button>                
            </div>
          </div>
    </div>
  )
}


export default Item;