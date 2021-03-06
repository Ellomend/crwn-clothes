import React from 'react';
import {withRouter} from 'react-router-dom'
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import './CartDropdown.scss'
import CustomButton from '../CustomButton/CustomButton'
import CartItem from "../CartItem/CartItem"
import { selectCartItems } from "../../redux/cart/cartSelectors"
import { toggleCartHidden } from "../../redux/cart/cartActions"



const CartDropdown = ({cartItems, history, dispatch}) => {
  return (
    <div className='cart-dropdown'>
      <div className="cart-items">
      {
        cartItems.length ?
          cartItems.map(item => (
            <CartItem key={item.id} item={item}/>
          ))
          :
          <span className='empty-message'>Your cart is empty</span>
      }
      </div>
      <CustomButton onClick={() => {
        history.push('/checkout')
        dispatch(toggleCartHidden())
      }}>GO TO CHECKOUT</CustomButton>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})
export default withRouter(connect(mapStateToProps)(CartDropdown))
