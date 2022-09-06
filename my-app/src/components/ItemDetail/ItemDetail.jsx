import React from 'react';


const ItemDetail = ({detail}) => {
    return (
        <div>
            {detail.map((producto) =>
            <div key={producto.id}>
                <div className="card mb-3">
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
            )}
            
        </div>
    );
}

export default ItemDetail;
