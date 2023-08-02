import React from 'react'
import Layout from '../components/Layouts/Layout'

const About = () => {
  return (
    <Layout title={'About us-Ecommerce app'}>
      <div className="row aboutus">
        <div className="col-md-6">
          <img 
          src='/image/about us.png'
          alt='aboutus'
          style={{width:"70%"}}/>
        </div>
        <div className="col-md-4">
        <h1 className='bg-dark p-2 text-white text-center'>ABOUT US</h1>
        <p className="text-justify mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, rerum. Tempora, officia vel nam assumenda id beatae distinctio possimus cum, blanditiis enim natus corporis laudantium non quam expedita cumque. Soluta quos odio a pariatur eligendi consectetur explicabo ipsum sequi totam fugiat magni ipsa ipsam assumenda quod delectus sed debitis, at laborum modi sit nobis? Molestias sed accusamus placeat accusantium ipsum, nemo odit odio qui, temporibus praesentium, sint voluptatem culpa aut! Earum, totam nobis? Necessitatibus sapiente repellendus quos suscipit nisi totam fugit, voluptates fugiat similique. Tempore corrupti dolor dolorum ipsum rerum aliquam, distinctio vitae ex voluptatibus doloremque mollitia veritatis fugiat voluptatum!
          
        </p>
        </div>
      </div>
    </Layout>
  )
}

export default About
