import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore';
import { fireStore } from '../../config/firebase'


const ProductContext = createContext()

const initialstate = {
  sorting_value: "lowest"

}
const reducer = (state, action) => {
  switch (action) {
    case "GET_SORT_VALUE":

      let userSortValue = document.getElementById("sort");
      let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
      console.log("🚀 ~ file: ProductContext.js:10 ~ reducer ~ sort_value:", sort_value)



      return {
        ...state,
        sorting_value: sort_value
      }

    default:
      return state;
  }

}


export default function ProductContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialstate)
  const [documents, setDocuments] = useState([])
  const [allProduct, setAllProduct] = useState([])
  const [isApploading, setisApploading] = useState(true)

  // -------------------------------- get task doc ------------------
  useEffect(() => {
    fatchDoc()
  }, [])


  const fatchDoc = async () => {
    const querySnapshot = await getDocs(collection(fireStore, "products"));
    const array = []
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      let data = doc.data()
      array.push(data)
    });
    setDocuments(array)
  }

  const sorting = () => {
    dispatch({ type: "GET_SORT_VALUE" })
  }
  
  useEffect(() => {
    setAllProduct(documents)
  }, [documents])
  
  return (
    <ProductContext.Provider value={{ ...state, allProduct, sorting, setAllProduct }}>
      {props.children}
    </ProductContext.Provider>
  )
}



export const UesProductContext = () => useContext(ProductContext)
