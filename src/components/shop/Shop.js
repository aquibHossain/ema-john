import React, { useEffect, useState } from 'react';

import Cart from '../cart/Cart';
import { displayData, storeData } from '../Database/fakedb';
import Product from '../product/Product';
import "./shop.css"

const Shop = () => {
    const [product,getProduct]=useState([])
    const [cart,setCart]=useState([])
    const [search,setSearch]=useState([])

    useEffect(()=>{
       fetch("./products.JSON")
       .then(res=>res.json())
       .then(data=>{
           getProduct(data)
           setSearch(data)
    })
    },[])
    
    useEffect(()=>{
        if (product.length){
        const storedData=displayData()
        const savedCart=[]
        for(const key in storedData)
        {
            const produc=product.find(pKey=>pKey.key===key);
            if(produc){
                produc.quantity=storedData[key]
                savedCart.push(produc)
                
            }
        }
        setCart(savedCart)
        console.log(cart);
    }},[product])
    function addProduct(product){
       const newCart=[...cart,product]
       setCart(newCart)
       storeData(product.key)
     }
     function searchItem(event) {
         const searchText=event.target.value
         const searchProduct=product.filter(proc=>proc.name.toLowerCase().includes(searchText.toLowerCase()))
         setSearch(searchProduct)
     }
    return (
        <div>
            <div className="search-container">
                <input type="text"
                onChange={searchItem} placeholder="Search Your Product" />
            </div>
        <div className="shop-container">
           <div className="product-container">
           <h1>Product Item</h1>
           {
               search.map(product=><Product
                key={product.key} 
                products={product} 
                add={addProduct}> </Product>)
           }
           </div>
           <div className="cart-container">
            <Cart cart={cart}></Cart>
            </div> 
        </div>
        </div>
    );
};

export default Shop;
