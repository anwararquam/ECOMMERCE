import React, {useState} from 'react'
import Layout from '../../components/Layouts/layout';
import axios from 'axios';
import {useNavigate,useLocation} from 'react-router-dom';
import {toast} from 'react-toastify';
import { useAuth } from '../../context/auth';
const Login = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [auth,setAuth]=useAuth("");
    const Location=useLocation()
    const ip= "http://localhost:8080";
    const navigate=useNavigate();
    const handleSubmit=async(e)=>{
        e.preventDefault() 
        try {
          const res=await axios.post(`${ip}/api/v1/auth/login`,{email,password});
          if(res.data.success){
            toast.success(res.data.message);
            setAuth({
                ...auth,
                user:res.data.user,
                token:res.data.token
            })
            localStorage.setItem('auth',JSON.stringify(res.data))
            navigate(Location.state||'/');
          }else{
            toast.error(res.data.message);
          }
        } catch (error) {
          console.log(error);
          toast.error("Something went wrong");
        }
      }
  return (<Layout>
 <div className='login'>
      
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
      <h3>LOGIN</h3>
    <input type="email" value={email}
    onChange={(e)=>setEmail(e.target.value)}
     className="form-control" id="exampleInputEmail" placeholder='Email'
     required
     />
    </div>
    <div className="mb-3">
    <input type="password" value={password}
    onChange={(e)=>setPassword(e.target.value)}
    className="form-control" id="exampleInputPassword" placeholder='Password'
    required
    />
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

    </div>
  </Layout>
   
  )
}

export default Login