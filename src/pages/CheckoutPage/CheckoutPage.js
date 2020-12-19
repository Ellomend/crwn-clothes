import React from "react"

import './CheckoutPage.scss'
import { createStructuredSelector } from "reselect"
import { connect } from "react-redux"
import { selectCartItems, selectCartTotal } from "../../redux/cart/cartSelectors"
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem"
import StripeButton from "../../components/StripeButton/StripeButton"

const CheckoutPage = ({cartItems, total}) => {
  return (
    <div className='checkout-page'>
      <div className="checkout-header">
        <div className="header-block"><span>Product</span></div>
        <div className="header-block"><span>Description</span></div>
        <div className="header-block"><span>Quantity</span></div>
        <div className="header-block"><span>Price</span></div>
        <div className="header-block"><span>Remove</span></div>
      </div>
      {
        cartItems.map(item => (<CheckoutItem cartItem={item} key={item.id}/> ))
      }
      <span className='total'>TOTAL: ${total}</span>
      <div className="test-warning">
        *Please use following test credit cart for payments*
        <br/>
        4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
      </div>
      <StripeButton price={total} />
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)
