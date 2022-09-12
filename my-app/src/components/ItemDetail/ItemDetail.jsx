import React from 'react';






const ItemDetail = ({nombre,image,descripcion,precio,stock}) => {

    return (
        
            <>
                <div className="card mb-3">
                    <h3 className="card-header">{nombre}</h3>
                    <div className="card-body">
                </div>
                <img src={image} />
                <div className="card-body">
                    <p className="card-text">Descripción: {descripcion}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Precio: ${precio}</li>
                    <li className="list-group-item">Stock:{stock}</li>
                </ul>
                    <div className="card-footer text-muted">
                        La Gata Manchas no se responsabiliza por daños colaterales
                    </div>
                </div>
            </>  
            
    );
}

export default ItemDetail;