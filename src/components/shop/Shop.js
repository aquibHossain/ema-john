import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Cart from '../cart/Cart';
import { displayData, storeData } from '../Database/fakedb';
import useCart from '../hoo/UseCart';
import Product from '../product/Product';
import "./shop.css"

const Shop = () => {
    const [product,getProduct]=useState([])
    const [cart,setCart]=useCart()
    const [search,setSearch]=useState([])
    const [pageCount,setPageCount]=useState(0)
    const [Page,setPage]=useState(0)
    const size=10;

    useEffect(()=>{
       fetch(`http://localhost:5000/products?page=${Page}&&size=${size}`)
       .then(res=>res.json())
       .then(data=>{
           getProduct(data.products)
           setSearch(data.products)
           const count=data.count
           const pageNumber=Math.ceil(count/size)
           setPageCount(pageNumber)
    })
    },[Page])
    
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
        const exist=cart.find(pd=>pd.key===product.key)
        let newCart=[]
        if(exist){
           const pro=cart.filter(pd=>pd.key!==product.key)
           exist.quantity=exist.quantity+1
           newCart=[...pro,product]
        }
       else{
           product.quantity=1
        newCart=[...cart,product]
       }
        
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
           <div className='pagination'>
               {
                   [...Array(pageCount).keys()]
                   .map(number=><button
                   className={number===Page?"selected":""}
                   key={number}
                   onClick={()=>setPage(number)}>{number+1}</button>)
               }
           </div>
           </div>
           
           <div className="cart-container">
            <Cart cart={cart}>
            <Link to="/order">
                    <button className="cart-button">Review Order</button>
                </Link>
            </Cart>
            </div> 
        </div>
        </div>
    );
};

export default Shop;
