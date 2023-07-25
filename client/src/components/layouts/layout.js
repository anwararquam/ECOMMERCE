import React from 'react'
import Header from '../Layouts/Header'
import Footer from '../Layouts/Footer'
const Layout = (props) => {
  return (
    <div>
     <Header/>
     <main style={{minHeight:'80vh'}}>
     {props.children}
     </main>
      <Footer/>
    </div>
  )
}

export default Layout
