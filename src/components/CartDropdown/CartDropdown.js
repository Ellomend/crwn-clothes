import React from 'react';

import './CartDropdown.scss'
import CustomButton from '../CustomButton/CustomButton'
import { connect } from "react-redux"
import CartItem from "../CartItem/CartItem"
import { selectCartItems } from "../../redux/cart/cartSelectors"


const CartDropdown = ({cartItems}) => {
  return (
    <div className='cart-dropdown'>
      <div className="cart-items">
      {
        cartItems.map(item => (
          <CartItem key={item.id} item={item}/>
        ))
      }
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};
const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state)
})
export default connect(mapStateToProps)(CartDropdown)
