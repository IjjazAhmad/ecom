import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore';
import { fireStore } from '../../config/firebase'


const ProductContext = createContext()



export default function ProductContextProvider(props) {
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


  
  useEffect(() => {
    setAllProduct(documents)
  }, [documents])
  
  return (
    <ProductContext.Provider value={{ allProduct, setAllProduct }}>
      {props.children}
    </ProductContext.Provider>
  )
}



export const UesProductContext = () => useContext(ProductContext)
