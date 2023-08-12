import React from 'react'
import Layout from '../../components/Layouts/layout'
import Adminmenu from '../../components/Layouts/Adminmenu'

const CreateCategory = () => {
  return (
    <Layout title={"Dashboard-Create Category"}>
    <div className="row">
        <div className="col-md-3">
            <Adminmenu/>
        </div>
        <div className="col-md-9">
        <h1>Create Category</h1>
        </div>
    </div>
      
    </Layout>
  )
}

export default CreateCategory
