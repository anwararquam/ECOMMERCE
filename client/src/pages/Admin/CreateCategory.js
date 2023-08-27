import React,{useEffect,useState} from 'react'
import Layout from '../../components/Layouts/layout'
import {toast} from 'react-toastify';
import Adminmenu from '../../components/Layouts/Adminmenu'
import axios from 'axios'
import Categoryform from '../../components/Form/Categoryform';
import {Modal} from 'antd';
const ip= "http://localhost:8080";
//create category on the basis of input
const CreateCategory = () => {
  const [categories,setCategories] = useState([]);
  const [name,setName]=useState("");
  const [visible,setvisible]=useState(false)
  const [selected,setSelected]=useState(null);
  const [updatedName,setUpdatedName]=useState("");
  const handleSubmit=async(e)=>{
      e.preventDefault();
      try {
        const {data}=await axios.post(`${ip}/api/v1/category/create-category`,{name})
        if(data.success){
          toast.success(`${name} is created`)
          getallCategory();
        }else{
          toast.error(data.message);
        }
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong in input form")
      }
  }
  //get all categories
  const getallCategory = async()=>{
    try {
      const {data}=await axios.get(`${ip}/api/v1/category/get-category`)
      if(data.success){
        setCategories(data.category);
      }
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong in getting category")
    }
  }
  useEffect(()=>{
    getallCategory();
  },[])
  //update category
  const handleUpdate=async(e)=>{
e.preventDefault();
try {
  const {data}=await axios.put(`${ip}/api/v1/category/update-category/${selected._id}`,{name:updatedName})
  if(data.success){
    toast.success(data.message);
    setSelected(null)
    setUpdatedName("");
    setvisible(false);
    getallCategory();
  }else{
    toast.error(data.message);
  }
} catch (error) {
  toast.error('Something went wrong');
}
  }
//delete category
  const handleDelete=async(pid)=>{
    try {
      const {data}=await axios.delete(`${ip}/api/v1/category/delete-category/${pid}`);
      if(data.success){
        toast.success(data.message);
        getallCategory();
      }else{
        toast.error(data.message);
      }
    } catch (error) {
      console.log('Something went wrong : '+ error)
      toast.error('Something went wrong : '+ error);
    }
      }
  return (
    <Layout title={"Dashboard-Create Category"}>
    <div className="row">
        <div className="col-md-3">
            <Adminmenu/>
        </div>
        <div className="col-md-9 w-50">
        <h1>Manage Category</h1>
        <div >
          <Categoryform handleSubmit={handleSubmit} value={name} setValue={setName}/>
        </div>
        <div className='w-75'>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
  {categories?.map(c =>(
  <>
    <tr>
      <td key={c._id}>{c.name}</td>
      <td>
        <button className='btn btn-primary ms-2' onClick={()=>{setvisible(true);setUpdatedName(c.name);
        setSelected(c);}}>Edit</button>
        <button className='btn btn-danger ms-2' onClick={()=>{handleDelete(c._id)}}>Delete</button>
      </td>
      </tr>
    </>
      ))}
   
  </tbody>
</table>
        </div>
        </div>
        <Modal  onCancel={()=>setvisible(false)}footer={null} visible={visible}>
          <Categoryform value={updatedName} setValue={setUpdatedName} handleSubmit={handleUpdate}/>
        </Modal>
    </div>
    </Layout>
  )
}

export default CreateCategory
