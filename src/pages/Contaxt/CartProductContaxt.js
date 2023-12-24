import React, { createContext, useContext } from 'react'



const CartProductContext = createContext()



export default function CartProductContextProvider(props) {
  let name = "addCart"
  return (
    <CartProductContext.Provider value={{name }}>
      {props.children}
    </CartProductContext.Provider>
  )
}



export const UesCartProductContext = () => useContext(CartProductContext)