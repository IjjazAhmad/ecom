import * as Yup from "yup";

export const AddproductSchema =Yup.object({
    productName: Yup.string().min(2).max(22).required("Plz! Enter Product Name") ,
    brand:       Yup.string().min(2).max(60).required("Plz! Enter Brand Name") ,
    oneLineDetail:Yup.string().min(10).max(80).required("Plz! Enter One Line Detail") ,
    price:       Yup.number().positive().integer().required("Plz! Enter Price") ,
    dscPrice:     Yup.number().positive().integer().required("Plz! Enter Discount price") ,
    quantity:     Yup.number().positive().integer().required("Plz! Enter Quantity") ,
    size:         Yup.string().required("Plz! Select Size") ,
    categories:   Yup.string().required("Plz! Select Category") ,
    deals:        Yup.string().required("Plz! Select One Deals") ,
    clr:          Yup.string().required("Plz! Select Color") ,
    offer:          Yup.string() ,
   
})
