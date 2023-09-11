import React,{useState,useEffect}from 'react'
import  {Link}  from 'react-router-dom';
import Adminmenu from '../../components/Layouts/Adminmenu'
import Layout from '../../components/Layouts/layout'
import axios from 'axios'
import { Toast, toast } from 'react-hot-toast'
const Product = () => {
    const [products,setProduct]=useState([]);
    const getAllProduct=async()=>{
        try {
            const {data}=await axios.get('http://localhost:8080/api/v1/product/get-product');
            setProduct(data.products);
        } catch (error) {
            console.log(error);
            toast.error("Something Went Wrong");
        }
    }
    useEffect(()=>{
        getAllProduct();
    },[])
  return (
    <Layout>
      <div className="row">
        <div className="col-md-3">
            <Adminmenu/>
        </div>
        <div className="col-md-9">
            <h1 className='text-center'>All Products List</h1>
            <div className="d-flex">
              {products?.map((p)=>(
              <Link key={p._id} to={`/dashboard/admin/product/${p.slug}`}className='product-link'>
              <div className="card m-2" style={{width: '18rem'}}>
              <img src={`http://localhost:8080/api/v1/product/product-photo/${p._id}`} className="card-img-top" alt={p.name} />
                <div className="card-body">
                 <h5 className="card-title">{p.name}</h5>
                 <p className="card-text">{p.description}</p>
                </div>
              </div>
              </Link>
              ))}
        </div>
        </div>
      </div>
    </Layout>
  )
}

export default Product
