import React from 'react'
import './_product.css'

export default function Product() {
  return (
    <div className='product'>
    <div className="product__info">
      <p>The lean startup</p>
      <p className='product__price'>
        <small>$</small>
        <strong>19.99</strong>
      </p>
      <div className="product__rating">
        <p>⭐</p>
        <p>⭐</p>
        <p>⭐</p>
      </div>
    </div>
    <img src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg" alt="" />
    <button>Add to Basket</button>
    </div>
  )
}
