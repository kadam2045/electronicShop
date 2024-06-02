export const decimalHelper = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2)
}

export const updateCart = (state) => {

    //calculate item price
    state.itemPrice = decimalHelper(state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0))

    //shipping price  
    //  if order price is greater than 100 then no shipping price else 10
    state.shippingPrice = decimalHelper(state.itemPrice > 100 ? 0 : 10)

    //tax prices  15 % 
    state.taxPrice = decimalHelper(Number(0.15 * state.itemPrice).toFixed(2))

    //total price
    state.totalPrice = decimalHelper(
        Number(state.itemPrice) +
        Number(state.shippingPrice) +
        Number(state.taxPrice)
    )

    localStorage.setItem('cart', JSON.stringify(state))

    return state

}