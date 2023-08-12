import React from 'react'
import Layout from './../../components/Layouts/layout'
import Adminmenu from '../../components/Layouts/Adminmenu'
import {auth, useAuth} from '../../context/auth'
const AdminDashboard = () => {
    const [auth]=useAuth();
  return (
    <Layout title={"Admin-Dashboard"}>
     <div className="container-fluid m-4 p-4">
        <div className="row">
            <div className="col-md-3">
                <Adminmenu/>
            </div>
            <div className="col-md-9">
                <div className="card w-75">
                <h3>Admin Name:{auth?.user?.name}</h3>
                <h3>Admin email:{auth?.user?.email}</h3>
                <h3>Admin Contact:{auth?.user?.phone}</h3>
            </div>
            </div>
        </div>
     </div>
    </Layout>
  )
}

export default AdminDashboard

