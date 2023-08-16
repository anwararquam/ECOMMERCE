import React from 'react'
import { NavLink } from 'react-router-dom'
const Usermenu = () => {
  return (
    <>
    <h3>Dashboard</h3>
    <div className="text-center">
    <ul className="list-group">
   <NavLink to="/dashboard/user/profile" className="list-group-item">Profile</NavLink>
   <NavLink to="/dashboard/user/orders"className="list-group-item">Orders</NavLink>
  
 
   </ul>
    </div>
     
 
    </>
  )
}

export default Usermenu
