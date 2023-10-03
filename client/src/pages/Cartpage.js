import Layout from '../components/Layouts/layout'
import React from 'react'
import { useCart } from '../context/cart'
import { useAuth } from '../context/auth'
import { useNavigate } from 'react-router-dom'

const Cartpage = () => {
  const [auth,setAuth]=useAuth();
  const [cart,setCart]=useCart();
  const navigate=useNavigate();
  const totalprice=()=>{
    try {
      let total=0;
      cart?.map(item=>{total=total+item.price});
      return total;
    } catch (error) {
      console.log(error);
    }
  }
  const removeCartItem=(pid)=>{
    try {
      let myCart=[...cart]
      let index=myCart.findIndex(item=>item._id == pid)
      myCart.splice(index,1);
      setCart(myCart);
      localStorage.setItem("cart",JSON.stringify(myCart));
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Layout>
      <div className="container">
        <div className="row">
            <h1 className='text-center bg-light p-1 mb-1'>
              {`Hello ${auth.token && auth.user?.name}`}
            </h1>
            <h4 className='text-center'>
              {cart?.length > 1 ? `You Have ${cart.length} items in your cart ${auth.token ? " " : "Please Login to checkout"}`:"Your Cart Is Empty"}
            </h4>
        </div>
        <div className="row">
          <div className="col-md-7">
            {
              cart?.map(p =>(
                <div className="row mb-2 card flex-row">
                  <div className="col-md-4">
                  <img src={`http://localhost:8080/api/v1/product/product-photo/${p._id}`} className="card-img-top" alt={p.name} />
                  </div>
                  <div className="col-md-8">
                    <h3>{p.name}</h3>
                    <p>{p.description.substring(0,30)}</p>
                    <h4>Price : {p.price}</h4>
                    <button className='btn btn-danger' onClick={()=>removeCartItem(p._id)}>Remove</button>
                  </div>
                </div>
              ))
            }
          </div>
          <div className="col-md-4  text-center ">
            <h2>Cart Summary</h2>
            <p>Total|Checkout|Payment </p>
            <hr/>
            <h3>Total : ₹ {totalprice()} </h3>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Cartpage
