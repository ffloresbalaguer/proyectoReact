import React from 'react';
import Item from '../Item/Item';

const ItemList = ({list}) => {
  return (

    <div>
      {list.map((producto, indice) => (
        <Item producto={producto} key={indice} />
      ))}
    </div>     


  )
}

export default ItemList