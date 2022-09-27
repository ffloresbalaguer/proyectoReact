import { addDoc, collection } from 'firebase/firestore';
import {React, useState, useContext} from 'react';
import db from '../../services/firebase';
import { MiContexto } from '../Context/CartContext';

const Checkout = () => {
    const {cart, precioTotal}=useContext(MiContexto);
    const [orderId, setOrderId] = useState()

    const [buyer, setBuyer] = useState({
        Nombre: '',
        Email: '',
        Phone: ''
    });

    const {Nombre, Email, Phone} = buyer

    const generateOrder = async(data) =>{
        try {
            const col = collection(db, "Orders")
            const order = await addDoc(col, data)
            setOrderId(order.id)
                    
        } catch (error) {
            console.log(error)            
        }
    }

    const handleInputChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name] : e.target.value            
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const items = cart.map(e=>{return {id: e.id, title: e.nombre, price: e.precio, amount: e.cantidad}})
        const fecha = new Date()
        const importeTotal = precioTotal()
        const data = {buyer, items, fecha, importeTotal}
        console.log('data', data)
        generateOrder(data)
    }



    console.log(buyer)




    




    return (
        <div className='d-flex justify-content-center'>
            {!orderId ?
            (<div>
            <h1 className='d-flex justify-content-center'>Checkout</h1>
            <h3>Ingresa tus datos</h3>
            <form onSubmit={handleSubmit} className='d-flex flex-column'>
            <input 
                type="text"
                name="Nombre"
                placeholder="Nombre"
                value={Nombre}
                onChange={handleInputChange}
                className="my-3"/>

            <input 
                type="text"
                name="Email"
                placeholder="Email"
                value={Email}
                onChange={handleInputChange} 
                className="my-3"/>

            <input 
                type="text"
                name="Phone"
                placeholder="Teléfono"
                value={Phone}
                onChange={handleInputChange} 
                className="my-3"/>

            <input
                type="submit"
                value="Finalizar Compra"
                className="btn btn-success my-3"                
                />
                      
            </form>
            </div>)
            :

            <h3>El número de seguimiento de su orden es: {orderId}</h3>
            }
            
        </div>
    );
}

export default Checkout;
