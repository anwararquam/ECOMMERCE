import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Layout from '../../components/Layouts/layout'
import Usermenu from '../../components/Layouts/Usermenu'
import { useAuth } from '../../context/auth'
import toast from 'react-hot-toast'
const ip= "http://localhost:8080";


const Profile = () => {
  
  //context
  const [auth,setAuth]=useAuth();
  //state
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [phone,setPhone]=useState("");
  const [address,setAddress]=useState("");
  useEffect(()=>{
    const {name,email,phone,address}=auth?.user;
    setAddress(address)
    setName(name)
    setEmail(email)
    setPhone(phone)
  },[auth?.user])
  const handleSubmit=async(e)=>{
    e.preventDefault()
    try {
      const {data}=await axios.put(`${ip}/api/v1/auth/profile`,{name,email,password,phone,address});
      if(data?.error){
        toast.success(data?.error);
        
      }else{
       setAuth({...auth,user:data?.updateduser})
       let ls=localStorage.getItem("auth")
       ls=JSON.parse(ls)
       ls.user=data.updateduser
       localStorage.setItem("auth",JSON.stringify(ls));
       toast.success("Profile Updated Successfully")
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  }
  return (
    <Layout title={"Your Profile"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
            <div className="col-md-3">
                <Usermenu/>
            </div>
            <div className="col-md-9">
            <h1>USER PROFILE</h1>
      <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <input type="text" value={name} 
    onChange={(e)=>setName(e.target.value)}
    className="form-control" id="exampleInputName" placeholder='Name'
      autoFocus
    />
    </div>
    <div className="mb-3">
    <input type="email" value={email}
    onChange={(e)=>setEmail(e.target.value)}
     className="form-control" id="exampleInputEmail" placeholder='Email'
     disabled
     />
    </div>
    <div className="mb-3">
    <input type="password" value={password}
    onChange={(e)=>setPassword(e.target.value)}
    className="form-control" id="exampleInputPassword" placeholder='Password'
    
    />
  </div>
    <div className="mb-3">
    <input type="text" value={phone}
    onChange={(e)=>setPhone(e.target.value)}
     className="form-control" id="exampleInputPhonenumber" placeholder='Phone Number'
     
     />
    </div>
    <div className="mb-3">
    <input type="text" value={address} 
    onChange={(e)=>setAddress(e.target.value)}
    className="form-control" id="exampleInputAddress" placeholder='Address'
    
    />
    </div>
    
  <button type="submit" className="btn btn-primary">Submit</button>
</form> 

            </div>
        </div>
      </div>
    </Layout>
  )
}

export default Profile
