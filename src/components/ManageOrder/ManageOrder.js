import React from 'react';
import { useHistory } from 'react-router';
import { useState,useEffect } from 'react';
import useAuthContext from '../Contexts/useAuthContext';

const ManageOrder = () => {
    const [order,setOrder]=useState([])
    const history =useHistory()
    const {user}=useAuthContext()
    useEffect(()=>{
       fetch(`https://intense-dawn-27289.herokuapp.com/orders?email=${user.email}`,{
           headers:{
               'authorization':`Bearer ${localStorage.getItem('idToken')}`
           }
       })
       .then(res=>{
           if(res.status==200){
           return res.json()
           }
           else if(res.status==401){
               history.push('/login')
           }
       })
       .then(data=>setOrder(data))
    },[])
    return (
        <div>
            <h1>Total Order: {order.length}</h1>
            <ul>
            {
                order.map(ord=><li>Email:{ord.email} Name:{ord.name}</li>)
            }
            </ul>
        </div>
    );
};

export default ManageOrder;