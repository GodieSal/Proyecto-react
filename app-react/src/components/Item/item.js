import React from 'react'
import {useNavigate} from 'react-router-dom';

const Item = ({product}) => {
    const navigate = useNavigate();
  
    const handleNavigate = () => {
      navigate(`/detail/${product.id}`)
    }
  
    return (
      <div onClick={handleNavigate}>
        <h1 >{product.title}</h1>
        <h1>Precio : {product.price}$</h1>
        <h1>Stock : {product.stock}u</h1>
        <p onClick={handleNavigate}>Mas Informacion</p>
      </div>
    )
  }
                
                export default Item