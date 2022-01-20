import React from 'react';
import { useHistory } from 'react-router';
import { clearTheCart, deleteFromDb } from '../../utilities/fakedb';
import Cart from '../cart/Cart';
import useCart from '../hoo/UseCart';
import Products from '../hook/Effect';
import Review from '../Review/Review';

const Order = () => {
    // const[product]=Products()
    const[cart,getCart]=useCart()
   const removeitem=p=>{
       const deleted=cart.filter(item=>p!==item.key)
       getCart(deleted)
       deleteFromDb(p)
   }
   const history=useHistory()
   const placerOrder=()=>{
    history.push("/shipping")
    // clearTheCart()
    // getCart([])
      
       
   }
    return (
        <div>
        <div className="shop-container">
        <div className="product-container">
          {
              cart.map(item=><Review
                key={item.key} products={item}
              remove={removeitem}></Review>)
          }
        </div>
        <div className="cart-container">
            <Cart cart={cart}>
                <button className="cart-button" onClick={placerOrder}>Place Order</button>
            </Cart>
        </div> 
        </div>
        <div className="container my-5 ">
            <div className="row ">
            <div className="col-lg-4 col-sm-6 d-flex  border border-1 p-4  justify-content-center">
            <div className="me-3 ">
            <i class="fas fa-truck text-warning fs-1"></i>
            </div>
            <div>
                <h6 className="m-0">FREE SHIPPING</h6>
                <p>For all order over 99$</p>
            </div>
            </div>
            <div className="col-lg-4 col-sm-6 d-flex  border border-1 p-4 justify-content-center">
            <div className="me-3">
            <i class="far fa-clock text-warning fs-1"></i>
            </div>
            <div>
                <h6 className="m-0">DELIVERY ON TIME</h6>
                <p>If good have problems</p>
            </div>
            </div>
            <div className="col-lg-4 col-sm-6 d-flex border border-1 p-4 justify-content-center">
            <div className="me-3">
            <i class="far fa-credit-card text-warning fs-1"></i>
            </div>
            <div>
                <h6 className="m-0">SECURE PAYMENT</h6>
                <p>100% secure payment</p>
            </div>
            </div>
           
        </div>
        </div>
        </div>
    );
};

export default Order;