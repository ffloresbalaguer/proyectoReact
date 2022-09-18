import React, {useContext} from 'react';
import {Link} from 'react-router-dom';

import { MiContexto } from '../Context/CartContext';




const CartView = () => {
    const {cart, deleteItem, vaciarCarrito, precioTotal}=useContext(MiContexto);

    console.log(cart)



    return (

        cart.length > 0 ?


        <div>
            {cart.map((data1) => 
                <div key={data1.id}>
                    <h1>{data1.nombre}</h1>
                    <p>Precio: ${data1.precio}</p>
                    <p>Cantidad: {data1.cantidad}</p>
                    <button onClick={() => deleteItem(data1.id)}>Eliminar</button>
                </div>
            )}


            <div>
                <h4>Precio Total: ${precioTotal()} </h4>            
            </div>       

            <button className="btn btn-danger" onClick={() => vaciarCarrito()}>Vaciar Carrito</button>   
            
        </div>


        :



        <div>
            <h2>Carrito Vacio</h2>
            <h3><button className='btn btn-dark'><Link className='nav-link' to='/'>Seguir Comprando</Link></button></h3>           
        </div>
    );
}

export default CartView;
