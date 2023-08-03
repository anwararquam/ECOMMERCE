import React from 'react'
// import Layout from '../components/Layouts/Layout'
import Layout from '../components/Layouts/layout'
const Policy = () => {
  return (
    <Layout title={'Privacy Policy'}>
      <div className="row privacypolicy">
        <div className="col-md-6">
          <img
          src='/image/policy.jpg'
          alt='privacypolicy'
          style={{width:"100%"}}/>
        </div>
        <div className="col-md-4">
          <h1 className='bg-dark p-2 text-white text-center'>PRIVACY POLICY</h1>
          <p className='text-justify mt-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos officia unde incidunt facilis, officiis harum cupiditate necessitatibus temporibus vitae dolorum impedit provident commodi ea excepturi nostrum ad voluptatem quidem minus fugit odit minima laborum at assumenda? Placeat a nisi animi consequuntur pariatur quidem reiciendis provident sunt magnam beatae soluta doloribus amet ullam vitae, asperiores quae cum ab. Ad?
          </p>
        </div>
      </div>
    </Layout>
  )
}
export default Policy
