import { useEffect, useState } from "react"
import Cart from "../cart/Cart";
import { displayData } from '../Database/fakedb';
import { memo } from "react";
const useCart=()=>{
    const [cart,getCart]=useState([]);
    useEffect(()=>{
        const savedCart=displayData();
        console.log("cart is",savedCart);
        
        const keys=Object.keys(savedCart);
        
        fetch('https://intense-dawn-27289.herokuapp.com/products/bykeys',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(keys)
        }).then(res=>res.json())
        .then(pro=>{
            console.log('hello',pro);
             if(pro.length){
            const save=[];
            for(const key in savedCart){
                const addCart= pro.find(item=>key===item.key)
                if(addCart){
                    const quantity=savedCart[key]
                    addCart.quantity=quantity
                    save.push(addCart)
                }   
            }
            getCart(save)
            
        }
        })
    },[])
    return [cart,getCart]
    }
 export default (useCart)
