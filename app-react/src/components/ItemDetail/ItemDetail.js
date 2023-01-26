import React from 'react'
import { useState } from 'react';
import ItemCount from '../ItemCount'
import { useNavigate } from 'react-router-dom';



const ItemDetail = ({product}) => {
const [qty, setQty] = useState(0);
const navigate = useNavigate();
const {addItem} = useContext (Shop);

  const addCart = (qty) => {
    const productToSave = {...product, quantity: qty}
    addItem(productToSave)
    setQty(qty)}
    
    
   
    const handleFinish = () => {
      navigate("/cart");

    }
  console.log(qty);

  
  return (
    <div className= "detail-container">
        <img className="detail-img"src={product.image}  width={550} alt="product-detail"/>
        <div className="detail-subcontainer">
          <h1>{product.title}</h1>
          <h3> {product.description}</h3>
          {!qty? <ItemCount
          stock={product.stock}
          initial={1000}
          onAdd={addCart}/> :
          <button onClick={handleFinish}> finalizar compra</button>}
        </div>
    </div>
  )

}

export default ItemDetail