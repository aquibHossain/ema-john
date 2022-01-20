import "./cart.css"
import React from 'react';

const Cart = (props) => {
    let total=0
    let totalQuantity=0
    for(const product of props.cart){
        if(!product.quantity){
            product.quantity=1
        }
        total+=(product.price*product.quantity)
        totalQuantity=totalQuantity+product.quantity
     }
    let shipping=total>0?15:0
    let tax=(total+shipping)*0.10
    let grandtotal=total+tax+shipping
//    console.log(props);

    
    return (
        <div>
            <h1>Order Summary</h1>
            <h3>Items Ordered:{totalQuantity}</h3>
            <p>Total:{total.toFixed(2)}</p>
            <p>Shipping :{shipping}</p>
            <p>Tax:{tax.toFixed(2)}</p>
            <p>Grand Total:{grandtotal.toFixed(2)}</p>
            {props.children}
             </div>
    );
};

export default Cart;