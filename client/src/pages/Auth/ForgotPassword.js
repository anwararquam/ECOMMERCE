import React ,{useState}from 'react'
import Layout from '../../components/Layouts/layout'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
const ForgotPassword = () => {
  const [answer,setAnswer]=useState("");
  const [email,setEmail]=useState("");
  const [newpassword,setNewPassword]=useState("");
  const navigate=useNavigate();
  const ip= "";
  const handleSubmit=async(e)=>{
    e.preventDefault()
    try {
      const res=await axios.post('http://localhost:8080/api/v1/auth/forgot-password',{email,newpassword,answer});
      if(res.data.success){
        toast.success(res.data.message);
        navigate('/login');
      }else{
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  }
  return (
    <Layout title={'ForgotPassword-Ecommerce App'}>
    <div className="forgot-password">
      <h1>RESET PASSWORD</h1>
      <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <input type="text" value={answer}
    onChange={(e)=>setAnswer(e.target.value)}
    className="form-control" id="exampleInputName" placeholder='Enter Your Favorite Car'
      required
    />
    </div>
    <div className="mb-3">
    <input type="email" value={email}
    onChange={(e)=>setEmail(e.target.value)}
     className="form-control" id="exampleInputEmail" placeholder='Email'
     required
     />
    </div>
    <div className="mb-3">
    <input type="password" value={newpassword}
    onChange={(e)=>setNewPassword(e.target.value)}
    className="form-control" id="exampleInputPassword" placeholder='New Password'
    required
    />
  </div>
  <button type="submit" className="btn btn-primary">RESET</button>
</form>
  </div>
    </Layout>
  )
}

export default ForgotPassword
