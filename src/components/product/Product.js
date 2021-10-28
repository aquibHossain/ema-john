import "./product.css"
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import Rating from "react-rating";

const Product = (props) => {
    const {name,img,seller,price,stock,star}=props.products
    const element = <FontAwesomeIcon icon={faShoppingCart} />
  
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div >
                <h3 className="product-name">{name}</h3>
                <p><small>by:{seller}</small></p>
                <p>Price:{price}</p>
                <p><small>Only {stock} left in stock - Order soon</small></p>
                <Rating 
                initialRating={star}
                emptySymbol="far fa-star icon-color"
                fullSymbol="fas fa-star icon-color "
                readonly ></Rating>  <br />
                <button onClick={()=>props.add(props.products)} className="cart-button">{element} Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;