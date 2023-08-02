import React from 'react'
import Layout from '../components/Layouts/Layout'
// import {BiMailSend,BiPhoneCall,BiSupport} from "react-icon/Bi";
const Contact = () => {
  return (
    <Layout title={'Contact Us'}>
    <div className="row contactus">
      <div className="col-md-6">
        <img
          src='/image/contactus.jpg'
          alt="contactus"
          style={{width:"97%"}}
        />
      </div>
      <div className="col-md-4">
        <h1 className='bg-dark p-2 text-white text-center'>CONTACT US</h1>
        <p className="text-justify mt-2">
          
          Any Quey And Info About Product Feel Free To Call Anytime We Are Here For You 24X7
        </p>
        <p className='mt-3'><strong>📧 www.help@ecommerceapp.com</strong>
          </p>
          
        <p className='mt-3'>
        <strong>☎️ 9386110168</strong>
          
        </p>
        <p className='mt-3'>
        <strong>🎧 9308762565</strong>
          </p>
      </div>
    </div>
      
    </Layout>
  )
}

export default Contact
