export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingItem = cartItems.find(item => item.id === cartItemToAdd.id)
  if (existingItem) {
    return cartItems.map(cartItem => {
      return cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1}
        : cartItem
    })
  }
  return [...cartItems, {...cartItemToAdd, quantity: 1}]
}

export const removeCartItem = (cartItems, cartItemToRemove) => {
  console.log('utils')
  const existingItem = cartItems.find(item => item.id === cartItemToRemove.id)
  if (existingItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
  } else {
    return cartItems.map(cartItem => {
      if (cartItem.id === cartItemToRemove.id) {
        return { ...cartItem, quantity: cartItem.quantity - 1 }
      } else {
        return cartItem
      }
    })
  }
}
