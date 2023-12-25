import React, { createContext, useContext, useReducer } from 'react'
const CartProductContext = createContext()

const initialState = {
  cartProduct: [],

}

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "AddProductToCart":
      return { cartProduct: [...state.cartProduct, payload.product] };
    default:
      return state;
  }
};
export default function CartProductContextProvider(props) {
  const [state, cartdispatch] = useReducer(reducer, initialState)




  return (
    <CartProductContext.Provider value={{ ...state, cartdispatch }}>
      {props.children}
    </CartProductContext.Provider>
  )
}



export const UesCartProductContext = () => useContext(CartProductContext)