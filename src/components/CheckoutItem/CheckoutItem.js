import React from "react"

import './CheckoutItem.scss'
import { addItem, clearItemFromCart, removeItemFromCart } from "../../redux/cart/cartActions"
import { connect } from "react-redux"

const CheckoutItem = ({cartItem, clearItemFromCart, addItem, removeItemFromCart}) => {

  const {imageUrl, name, price, quantity} = cartItem

  return (
    <div className='checkout-item'>
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItemFromCart(cartItem)}>&#10094;</div>
        <span className='value'>{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItemFromCart(cartItem)}>&#10005;</div>
    </div>
  )
}

export const mapActionToProps = {
  clearItemFromCart,
  addItem,
  removeItemFromCart
}

export default connect(null, mapActionToProps)(CheckoutItem)
