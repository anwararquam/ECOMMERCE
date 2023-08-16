import React from 'react'
import Layout from '../../components/Layouts/layout'
import Usermenu from '../../components/Layouts/Usermenu'
import { useAuth } from '../../context/auth'
const Orders = () => {
  const [auth]=useAuth();
  return (
    <Layout title={"Orders"}>
    <div className="container-fluid p-3 m-3">
    <div className="row">
        <div className="col-md-3">
            <Usermenu/>
        </div>
        <div className="col-md-9">
            <h1>All Orders</h1>
            
        </div>
        
      </div>
    </div>
      
    </Layout>
  )
}

export default Orders
