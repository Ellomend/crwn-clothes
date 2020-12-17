import React from 'react';

import './CartIcon.scss'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cartActions'

const CartIcon = ({toggleCartHidden}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon'/>
      <span className='item-count'>0</span>
    </div>
)

const mapStateToProps = ({ cart }) => ({
  hidden: cart.hidden
})
const dispatchProps = {
  toggleCartHidden: toggleCartHidden
}
export default connect(mapStateToProps, dispatchProps)(CartIcon);
