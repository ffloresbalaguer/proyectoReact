import React, {useContext} from 'react';

import { MiContexto } from '../Context/CartContext';




const Cart = () => {
    const {cart, deleteItem, vaciarCarrito}=useContext(MiContexto);

    console.log(cart)



    return (
        <div>
            {cart.map((data1) => 
                <div key={data1.id}>
                    <h1>{data1.nombre}</h1>
                    <p>Precio: ${data1.precio}</p>
                    <p>Cantidad: {data1.cantidad}</p>
                    <button onClick={() => deleteItem(data1.id)}>Eliminar</button>
                </div>
            )}         

            <button className="btn btn-danger" onClick={() => vaciarCarrito()}>Vaciar Carrito</button>   
            
        </div>
    );
}

export default Cart;
