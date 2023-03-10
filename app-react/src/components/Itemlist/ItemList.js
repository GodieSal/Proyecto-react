import React from 'react';
import Item from '../ItemDetailContainer';


const ItemList = ({products}) => {

  return (
    <div>
        {products.length ? products.map(product => {
            return <Item key={product.id} product={product}/>
        })
        :
        <h2>Loading...</h2>
      }
    </div>
  )
}

export default ItemList