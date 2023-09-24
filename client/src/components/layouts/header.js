import React from 'react'
import {NavLink,Link} from 'react-router-dom'
import { useAuth } from '../../context/auth'
import  toast  from 'react-hot-toast'
import Searchinput from '../Form/Searchinput.js'
import useCategory from '../../hooks/useCategory'
import { useCart } from '../../context/cart'
const Header = () => {
  const [auth,setAuth]=useAuth()
  const categories=useCategory()
  const [cart]=useCart()
  const handleLogout=()=>{
    setAuth({
      ...auth,user:null,token:""
    })
    localStorage.removeItem('auth')
    toast.success("Logout Successfully")
  } 
  return (
    <>
     <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link to="/"className="navbar-brand" >🛒 Today's Fashion</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <Searchinput/>
        <li className="nav-item">
          <NavLink to={"/categories"} className="nav-link" aria-current="page" href="#">Home</NavLink>
        </li>
       <li className="nav-item dropdown">
  <Link className="nav-link dropdown-toggle" to={"/"}  data-bs-toggle="dropdown" >
    Categories
  </Link>
  <ul className="dropdown-menu">
  <li>
  <Link className="dropdown-item" to={"/categories"}>All Categories</Link>
  </li>
  {categories?.map((c)=>(
    <li>
    <Link className="dropdown-item" to={`/category/${c.slug}`}>{c.name}</Link>
    
    </li>
    ))}
  </ul>
</li>

        <li className="nav-item">
          <NavLink to="/category" className="nav-link">Category</NavLink>
        </li>
        {
          !auth.user ? (<>
            

            <li className="nav-item">
          <NavLink to="/register" className="nav-link" href="#">Register</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/login" className="nav-link" href="#">Login</NavLink>
        </li>
          </>):(<>
            <li className="nav-item dropdown">
  <NavLink className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    {auth?.user?.name}
  </NavLink>
  <ul className="dropdown-menu">
    <li><NavLink to={`/dashboard/${auth?.user?.role===1?'admin':'user'}`}className="dropdown-item" >Dashboard</NavLink></li>
    <li><NavLink onClick={handleLogout}to="/login" className="dropdown-item" href="#">Logout</NavLink></li>
  </ul>
</li>
           
          </>)
        }
        <li className="nav-item">
          <NavLink to="/cart" className="nav-link" href="#">Cart {cart?.length}</NavLink>
        </li>
        {/* <li className="nav-item dropdown">
          <NavLink to="/" className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </NavLink>
          <ul className="dropdown-menu">
            <li><NavLink to="/" className="dropdown-item" href="#">Action</NavLink></li>
            <li><NavLink to="/" className="dropdown-item" href="#">Another action</NavLink></li>
            <li><hr className="dropdown-divider" /></li>
            <li><NavLink to="/" className="dropdown-item" href="#">Something else here</NavLink></li>
          </ul>
        </li> */}
        
      </ul>
      </div>
  </div>
</nav>

    </>
  )
}

export default Header
