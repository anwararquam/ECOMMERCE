import React from 'react'
import Layout from '../../components/Layouts/layout'
import Usermenu from '../../components/Layouts/Usermenu'
import { useAuth } from '../../context/auth'
import { Avatar} from 'antd';
const Dashboard = () => {
  const[auth]=useAuth()
  return (
    <Layout title={'Dashboard - Ecommerce App'}>
    <div className="user_dashboard">
    <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <Usermenu/>
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3">
            <div className="avtar">
            <Avatar
            size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
            icon={(auth?.user?.name).substring(0,1).toUpperCase()} />  {(auth?.user.name).toUpperCase()}
            </div>
            <hr></hr>
            <h3>Profile name: {(auth?.user?.name).toUpperCase()}</h3>
            
            <h3>Email Id:  {auth?.user?.email}</h3>
            
            <h3>Address:  {auth?.user?.address}</h3>
            
            <h3>Phone number: {auth.user?.phone}</h3>
            
            </div>
          </div>
        </div>
      </div> 
    </div>
     
    </Layout>
  )
}

export default Dashboard
