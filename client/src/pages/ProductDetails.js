import React,{useState,useEffect} from 'react'
import Layout from '../components/Layouts/layout'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Product from './Admin/Product'
const ip= "http://localhost:8080";
const ProductDetails = () => {
    const params=useParams();
    const [product,setProducts]=useState({});
    const [realtedproduct,setRelatedProduct]=useState([]);
    useEffect(()=>{
        if(params?.slug)getProduct();
    },[params.slug])
    const getProduct=async()=>{
        try {
            const {data}=await axios.get(`${ip}/api/v1/product/get-product/${params.slug}`)
            setProducts(data?.product);
            getsimilarproduct(data?.product._id,data?.product.category._id);
        } catch (error) {
            console.log(error);
        }
    }
    const getsimilarproduct=async(pid,cid)=>{
        try {
            const {data}=await axios.get(`${ip}/api/v1/product/related-product/${pid}/${cid}`);
            setRelatedProduct(data?.products);
        } catch (error) {
            console.log(error);
        }
    };
  return (
    <Layout>
      <div className="row container">
        <div className="col-md-6 mt-2">
        <img src={`http://localhost:8080/api/v1/product/product-photo/${product._id}`} className="card-img-top" alt={product.name}
        height="380"
        width={'270px'} />
        </div>
        <div className="col-md-6">
            <h1>Product Details</h1>
            <h4>Name : {product.name}</h4>
            <h4>Details : {product.description}</h4>
            <h4>Price : {product.price}</h4>
            <h4>Category : {product?.category?.name}</h4>
            <button className='btn btn-secondary ms-1' >ADD TO CART</button>
        </div>
      </div>
      <hr/> 
      <div className="row container">
        <h5>Related Products</h5>
        {realtedproduct.length<1 && (<p className='text-center'>No Similar Product Found</p>)}
        <div className="d-flex flex-wrap">
          {realtedproduct?.map((p)=>(
              <div className="card m-2" style={{width: "18rem"}}>
              <img src={`http://localhost:8080/api/v1/product/product-photo/${p._id}`} className="card-img-top" alt={p.name} />
                <div className="card-body">
                 <h5 className="card-title">{p.name}</h5>
                 <p className="card-text">{p.description.substring(0,25)}...</p>
                 <p className="card-text">${p.price}</p>
                 
                 <button class="btn btn-outline-secondary ms-1">ADD TO CART</button>
                </div>
              </div>
              ))}
          </div>
      </div>
    </Layout>
  )
}

export default ProductDetails
