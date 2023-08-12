import React from 'react'
import Adminmenu from '../../components/Layouts/Adminmenu'
import Layout from '../../components/Layouts/layout'

const Users = () => {
  return (
    <Layout title={"Dashboard-All Users"}>
    <div className="row">
        <div className="col-md-3">
            <Adminmenu/>
        </div>
        <div className="col-md-9">
        <h1>All Users</h1>
        </div>
    </div>
      
    </Layout>
  )
}

export default Users
