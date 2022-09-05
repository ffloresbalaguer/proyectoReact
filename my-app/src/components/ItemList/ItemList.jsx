import React from 'react';
import Item from '../Item/Item';

const ItemList = ({list}) => {
  return (

    <div>
      {list.map((producto) => (
        <Item producto={producto} key={producto.id} />
      ))}
    </div>     


  )
}

export default ItemList