import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';
import { AddproductSchema } from '../Schema'
// import { PlusOutlined } from '@ant-design/icons';
// import { Modal, Upload } from 'antd';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { storage } from '../../config/firebase';
import { ref, uploadBytes, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { fireStore } from '../../config/firebase'
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
const initialValues = { productName: '', brand: "", oneLineDetail: "", price: "", dscPrice: "", quantity: "", size: "", categories: "", deals: "", clr: "", offer: "" }


export default function AddProduct() {
  const [file, setFile] = useState({})
  const [progress, setProgress] = useState(0)
  const [imgUrl, setimgUrl] = useState("")
  const [value, setValue] = useState('')
  const [isLoading, setisLoading] = useState(false)
  const handlefile = e => {
    let file = e.target.files[0]
    if (!file.size) {
      window.notify("plz! select image", "error")
      return
    }

    setFile(file)

  }
  const handleUpload = () => {
    if (!file.size) {
      window.notify("plz! select image", "error")
      return
    }

    const fileExt = file.name.split('.').pop()
    const randomId = Math.random().toString(36).slice(2)
    // setisLoading(true)
    try {
      const imagesRef = ref(storage, `images/${randomId}.${fileExt}`);
      const uploadTask = uploadBytesResumable(imagesRef, file);
      uploadTask.on('state_changed',
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          console.log(progress);
          setProgress(progress)

        },
        (error) => {
          switch (error.code) {
            case 'storage/unauthorized':
              window.notify("image storage/unauthorized!", "error")
              break;
            case 'storage/canceled':
              window.notify("image storage/unauthorized!", "error")
              break;
            case 'storage/unknown':
              window.notify("image storage/unknown!", "error")
              break;
          }
        },

        () => {
          // Upload completed successfully, now we can get the download URL
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setimgUrl(downloadURL)
            console.log('File available at', downloadURL);
          });
        }

      )
      uploadBytes(imagesRef, file).then((snapshot) => {
        console.log('Uploaded a blob or file!');
        window.notify("image added successfully!", "success")
      });
      console.log(file);


    }
    catch (err) {
      window.notify("Something wants wrong! image not added", "error")
    }
    setisLoading(false)
  }
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: AddproductSchema,
    onSubmit: async (values) => {
      const product = values

      product.dateCreated = serverTimestamp()
      product.imgUrl = imgUrl
      product.fullDetail = value
      product.uid = Date.now().toString(36) + Math.random().toString(36).substring(2)
      try {
        setisLoading(true)
        await setDoc(doc(fireStore, "products", product.uid), product);
        console.log("product added");
        window.notify("Product added successfully!", "success")
        setisLoading(false)
      } catch (err) {
        console.log(err);
        console.log("product not added");
        window.notify("Something wants wrong! Product not added", "error")
      }
      value = initialValues
    }
  })



  //  ======================== heandle Img 
  // const [previewOpen, setPreviewOpen] = useState(false);
  // const [previewImage, setPreviewImage] = useState('');
  // const [previewTitle, setPreviewTitle] = useState('');
  // const [fileList, setFileList] = useState([]);
  // const handleCancel = () => setPreviewOpen(false);
  // const handlePreview = async (file) => {
  //   if (!file.url && !file.preview) {
  //     file.preview = await getBase64(file.originFileObj);
  //   }
  //   setPreviewImage(file.url || file.preview);
  //   setPreviewOpen(true);
  //   setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  // };
  // const handleChangeImg = ({ fileList: newFileList }) => setFileList(newFileList);
  // const uploadButton = (
  //   <div>
  //     <PlusOutlined />
  //     <div
  //       style={{
  //         marginTop: 8,
  //       }}
  //     >
  //       Upload
  //     </div>
  //   </div>
  // );

  return (
    <>


      <div className="addproduct">

        <div className="container">
          <div className="row">
            <div className="col">
              <h2>Add Product :</h2>
            </div>
            <div className="col">
              {value}
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="row Box my-4">
              <div className="col-12 col-md-6 col-lg-6">
                <span className='span'>
                  <input className="gate" id="name" type="text" placeholder="Product Name!" name='productName' onChange={handleChange} onBlur={handleBlur} /><label htmlFor="name">Name</label>
                  {errors.productName && touched.productName ? <span className='text-danger'>{errors.productName}</span> : null}
                </span>

              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <span className='span'>
                  <input className="gate" id="brand" type="text" placeholder="Brand Name!" name='brand' onChange={handleChange} onBlur={handleBlur} /><label htmlFor="brand">Brand</label>
                  {errors.brand && touched.brand ? <span className='text-danger'>{errors.brand}</span> : null}
                </span>
              </div>
              <div className="col-12">
                <span className='span'>
                  <input className="gate" id="detail" type="text" placeholder="One Line Detail!" name='oneLineDetail' onChange={handleChange} onBlur={handleBlur} /><label htmlFor="detail">Detail</label>
                  {errors.oneLineDetail && touched.oneLineDetail ? <span className='text-danger'>{errors.oneLineDetail}</span> : null}
                </span>
              </div>
              <div className="col-12 col-md-12 col-lg-12">
                <span className='span'>
                  {/* <textarea className="gate" rows={6} id="class" type="text" placeholder="Complete Detail!" /> */}
                  <label className='bg-warning p-2 my-2' role="button" htmlFor='img'>Details</label>
                  <ReactQuill theme="snow" onChange={setValue} className="ReactQuill bg-white  text-black" id='detail' />
                </span>
              </div>
            </div>
            <div className="row Box my-4">
              <div className="col-12 col-md-6 col-lg-6">
                <span className='span'>
                  <input className="gate" id="price" type="number" placeholder="Price!" name='price' onChange={handleChange} onBlur={handleBlur} /><label htmlFor="price">Price</label>
                  {errors.price && touched.price ? <span className='text-danger'>{errors.price}</span> : null}
                </span>
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <span className='span'>
                  <input className="gate ps-5" id="discount" type="number" placeholder="Discount Price!" name='dscPrice' onChange={handleChange} onBlur={handleBlur} /><label htmlFor="discount">Discount</label>
                  {errors.dscPrice && touched.dscPrice ? <span className='text-danger'>{errors.dscPrice}</span> : null}
                </span>
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <span className='span'>
                  <input className="gate " id="qty" type="number" placeholder="Quantity !" name='quantity' onChange={handleChange} onBlur={handleBlur} /><label htmlFor="qty">QTY</label>
                  {errors.quantity && touched.quantity ? <span className='text-danger'>{errors.quantity}</span> : null}
                </span>
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <span className='span'>

                  <select className="gate " id="offer" name='offer' onChange={handleChange} onBlur={handleBlur} >
                    <option value={""}>NoDeal</option>
                    <option value={"Hot"}>Hot</option>
                    <option value={"New"}>New</option>
                    <option value={"Sale"}>Sale</option>
                  </select>
                  <label htmlFor="offer">offer</label>
                  {errors.offer && touched.offer ? <span className='text-danger'>{errors.offer}</span> : null}
                </span>
              </div>
            </div>

            <div className="row Box my-4">
              <div className="col-6">
                <span className='span'>
                  <input className="gate" id="img" type="file" accept='image/*' placeholder="Upload Image!" name='file' onChange={handlefile} /><label htmlFor="img">image</label>
                </span>

                {/* <label className='bg-warning p-2 my-2' role="button" htmlFor='img'>Upload Images</label> */}
                {/* <Upload
                  action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                  listType="picture-card"
                  id='img'
                  fileList={fileList}
                  onPreview={handlePreview}
                  onChange={handleChangeImg}
                >
                  {fileList.length >= 8 ? null : uploadButton}
                </Upload>
                <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                  <img
                    alt="example"
                    style={{
                      width: '100%',
                    }}
                    src={previewImage}
                  />
                </Modal> */}
              </div>
              <div className="col-6 text-center ">
                <span className='span'>
                  {isLoading ?
                    <button class="btn bg-info btn-primary" type="button" disabled>
                      <span class="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
                      <span role="status">Loading...</span>
                    </button>
                    :
                    <button type='button' className='btn btn-warning' onClick={handleUpload}  >Upload</button>
                  }
                </span>
              </div>
              <div className="col-12">
                {isLoading && progress ?
                  <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar bg-warning progress-bar-striped progress-bar-animated" style={{ width: `${progress}%` }}></div>
                  </div>
                  :
                  null
                }

              </div>
            </div>
            <div className="row Box my-4">
              <div className="col-12 col-md-6 col-lg-6">
                <span className='span'>

                  <select className="gate" id="size" name='size' onChange={handleChange} onBlur={handleBlur}>
                    <option value={""}>Choose Size</option>
                    <option value={"sm"} >SM</option>
                    <option value={"md"} >MD</option>
                    <option value={"l"} >L</option>
                    <option value={"xl"} >XL</option>
                    <option value={"xxl"} >XXL</option>
                  </select>
                  <label htmlFor="size">Size</label>
                  {errors.size && touched.size ? <span className='text-danger'>{errors.size}</span> : null}
                </span>
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <span className='span'>

                  <select className="gate ps-5" id="ctg" name='categories' onChange={handleChange} onBlur={handleBlur} >
                    <option value={""}>Choose Categories</option>
                    <option value={"men"}>MEN</option>
                    <option value={"women"}>WOMEN</option>
                    <option value={"kids"}>KIDS</option>
                  </select>
                  <label htmlFor="ctg">Categories</label>
                  {errors.categories && touched.categories ? <span className='text-danger'>{errors.categories}</span> : null}
                </span>
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <span className='span'>

                  <select className="gate " id="deals" name='deals' onChange={handleChange} onBlur={handleBlur} >
                    <option value={""}>Choose Deals</option>
                    <option value={"newArrival"}>New Arrival</option>
                    <option value={"bestSeller"}>Best Seller</option>
                    <option value={"salesItems"}>Sales Items</option>
                  </select>
                  <label htmlFor="deals">Deals</label>
                  {errors.deals && touched.deals ? <span className='text-danger'>{errors.deals}</span> : null}
                </span>
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <span className='span'>

                  <input className="gate" id="color" type="color" name='clr' onChange={handleChange} onBlur={handleBlur} />
                  <label htmlFor="color">Color</label>
                  {errors.clr && touched.clr ? <span className='text-danger'>{errors.clr}</span> : null}
                </span>
              </div>

            </div>
            <div className="row Box my-4">
              <div className="col-12 text-center">
                {isLoading ?
                  <button class="btn bg-info btn-primary" type="button" disabled>
                    <span class="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
                    <span role="status">Loading...</span>
                  </button>
                  :
                  <button type='submit' className='btn btn-warning'   >ADD PRODUCT</button>
                }
              </div>

            </div>
          </form>
        </div >
      </div >



    </>
  )
}
