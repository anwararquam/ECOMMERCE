import React,{useState,useEffect} from 'react'
import Layout from '../components/Layouts/layout';
import axios from 'axios';
import {Checkbox,Radio} from 'antd';
import {Prices} from '../components/Prices.js'
const Homepage = () => {
  const[products,setProducts]=useState([])
  const[categories,setCategories]=useState([])
  const[checked,setChecked]=useState([])
  const[radio,setRadio]=useState([])
  const ip= "http://localhost:8080";
  const getallCategory = async()=>{
    try {
      const {data}=await axios.get(`${ip}/api/v1/category/get-category`)
      if(data.success){
        setCategories(data.category);
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    getallCategory();
  },[])
  //all products
const getAllProducts=async()=>{
    try {
      const {data}=await axios.get(`${ip}/api/v1/product/get-product`);
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
     
  };
  const handleFilter=(value,id)=>{
    try {
      let all=[...checked]
      if(value){
        all.push(id)
      }else{
        all=all.filter(c=>c!==id);
      }
      setChecked(all);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    getAllProducts();
  },[])
  return (
    <Layout title={'All Product - Best Offers'}>
      <div className="row mt-3">
        <div className="col-md-3">
          <h4 className='text-center'>Filter By Category</h4>
          <div className="d-flex flex-column">
          {categories?.map(c=>(
            <Checkbox key={c._id} onChange={(e)=> handleFilter(e.target.checked,c._id)}>
              {c.name}
            </Checkbox>
          ))}
          </div>
          <h4 className='text-center'>Filter By Price</h4>
          <div className="d-flex flex-column">
           <Radio.Group onChange={e=>setRadio(e.target.value)}>
            {Prices?.map(p=>(
                <div key={p._id}>
                  <Radio value={p.array}>{p.name}</Radio>
                </div>
            ))}
           </Radio.Group>
          </div>
        </div>
        <div className="col-md-9">
        {JSON.stringify(checked,null,4)}
        {JSON.stringify(radio,null,4)}
          <h1 className='text-center'>All Products</h1>
          <div className="d-flex flex-wrap">
          {products?.map((p)=>(
              <div className="card m-2" style={{width: "18rem"}}>
              <img src={`http://localhost:8080/api/v1/product/product-photo/${p._id}`} className="card-img-top" alt={p.name} />
                <div className="card-body">
                 <h5 className="card-title">{p.name}</h5>
                 <p className="card-text">{p.description}</p>
                 <button class="btn btn-outline-dark ms-1 ">Add +</button>
                 
                <button class="btn btn-outline-secondary ms-1">Info</button>
                </div>
              </div>
              
              ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Homepage
