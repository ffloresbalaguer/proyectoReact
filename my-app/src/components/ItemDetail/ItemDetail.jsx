import React, {useState} from 'react';
import {Link} from 'react-router-dom';







const ItemDetail = ({detail}) => {
    
    const [cantidad, setCantidad] = useState(1);
    
    const agregarAlCarrito = (detail, cantidad) => {
        const productoCarrito = {id: detail.id, cantidad: cantidad}
        console.log(productoCarrito)        
    }

    const cantidadProducto = (operacion) =>{
        if (operacion == "+") {
            if(cantidad < detail.stock){
                setCantidad(cantidad + 1)
            }
        } else {
            if(cantidad > 1){
                setCantidad(cantidad - 1)
            }
        }

    }



    return (
        
            <>
                <div className="card mb-3">
                    <h3 className="card-header">{detail.nombre}</h3>
                    <div className="card-body">
                </div>
                <img src={detail.image} />
                <div className="card-body">
                    <p className="card-text">Descripción: {detail.descripcion}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Precio: ${detail.precio}</li>
                    <li className="list-group-item">Stock:{detail.stock}</li>
                </ul>
                    <div className="card-footer text-muted">
                        La Gata Manchas no se responsabiliza por daños colaterales
                    </div>
                    <button className= 'btn btn-primary' onClick= {() => cantidadProducto("+")}>
                        +
                    </button>
                    
                    <button className='btn btn-secondary' onClick= {() => cantidadProducto("-")}>
                        -
                    </button>
                    <p>
                        {cantidad}
                    </p>
                    <button className= 'btn btn-dark' onClick={() => agregarAlCarrito(detail, cantidad)}>Comprar</button>
                    <button className='btn btn-light'><Link className='link' to='/cart'>Terminar Compra</Link></button>
                </div>
            </>  
            
    );
}

export default ItemDetail;