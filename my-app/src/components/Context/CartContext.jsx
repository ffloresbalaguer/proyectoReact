import React, { createContext, useState } from 'react';




export const MiContexto = createContext({});

const CartContext = ({children}) => {

    const [cart, setCart] = useState ([])

    const vaciarCarrito = () => {
        setCart([])
    }

    const isInCart = (id) => {
        return cart.some(item => item.id === id)

    }

    const addItem = (item, cantidad) => {
        const newItem = {
            ...item, cantidad
        }

        if(isInCart(item.id)){
            const findProduct = cart.find(data => data.id === newItem.id) 
            const indexProduct = cart.indexOf(findProduct)
            const auxCart = [...cart]
            auxCart[indexProduct].cantidad += cantidad  
            setCart(auxCart)     
        } else {
            setCart([...cart, newItem])
        }
    }

    const deleteItem = (id) => {
        const filter = cart.filter((i) => i.id !== id);
        setCart(filter);
    };

    const precioTotal = () => {
        let total = 0;
        cart.forEach((element)=>{
            total = total + (element.cantidad * element.precio)            
        })
        return total;        
    }


    return <MiContexto.Provider value={{deleteItem, addItem, vaciarCarrito, precioTotal, cart}}>{children}</MiContexto.Provider>;
    
}

export default CartContext;
