import React from 'react'
import Counter from '../ItemCount/ItemCount'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import ItemList from '../ItemList/ItemList'


const ItemListContainer = ({greeting}) => {
    function onAdd (count){
        alert(`Te estas llevando ${count} Manchas`)

    }


    return (
        <div>
            <h1>{greeting}</h1>
            <div>
                <Counter stock={7} onAdd={onAdd}/>                 
            </div>
            <div>
                <ItemList/>
            </div>
            <div>
                <ItemDetailContainer/>
            </div>
        </div>
        
    )
}

export default ItemListContainer