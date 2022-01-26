import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuthContext from '../Contexts/useAuthContext';

const ManageOrder = () => {
    const [order,setOrder]=useState([])
    const {user}=useAuthContext()
    useEffect(()=>{
       fetch(`https://intense-dawn-27289.herokuapp.com/orders?email=${user.email}`)
       .then(res=>res.json())
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