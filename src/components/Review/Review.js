import React from 'react';

const Review = (props) => {
    const {name,seller,price,quantity}=props.products
    return (
        <div>
            
                <h3 className="product-name">{name}</h3>
                <p><small>by:{seller}</small></p>
                <p>Price:{price}</p>
                <p><small> Quantity{quantity}</small></p>
                <button onClick={()=>props.remove(props.products.key)} className="cart-button"> Remove</button>
            
        </div>
    );
};

export default Review;