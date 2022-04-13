import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useHistory } from 'react-router';
import { useState,useEffect } from 'react';
import useAuthContext from '../Contexts/useAuthContext';
import { Container, Grid } from '@mui/material';


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
           console.log(res.status);
           if(res.status===200){
           return res.json()
           }
           else if(res.status===401){
               history.push('/login')
           }
       })
       .then(data=>{console.log(data) 
        setOrder(data)})
       
    },[])
    return (
        <div className='font ' >
            <h1 className='text-center my-5 fw-bold p-3 text-white' style={{backgroundColor:'#949886'}}> Order History: {order.length}</h1>
            <Container className='my-5 text-center '>
      
          <Grid container className=' bg-warning p-3 fw-bolder text-white'>
          <Grid item xs={3} md={3} sm={3} >
            <Typography variant='h6'>Name</Typography>
            </Grid>
          <Grid item xs={3} md={3} sm={3} >
          <Typography variant='h6'>Address</Typography>
            </Grid>
          <Grid item xs={3} md={3} sm={3} >
          <Typography variant='h6'>Order Date</Typography>
            </Grid>
          <Grid item xs={3} md={3} sm={3} >
          <Typography variant='h6'>Ordered Items</Typography>
            </Grid>
            </Grid>
    
           
          {order.map((row) => (
            <Grid container
            className=' my-4 manage'
              key={row._id}
            >
            
          <Grid item xs={3} md={3} sm={3} className='px-2 py-4' >
            <Typography >{row.name}</Typography>
            </Grid>
          <Grid item xs={3} md={3} sm={3} className='px-2 py-4'>
          <Typography >{row.address}</Typography>
            </Grid>
          <Grid item xs={3} md={3} sm={3} className='px-2 py-4'>
          <Typography >{row.createdAt.split("T")[0]}</Typography>
            </Grid>
          <Grid item xs={3} md={3} sm={3} className='px-2 py-4'>
          <Typography >{Object.keys(row.order).length}</Typography>
            </Grid>
            </Grid>
           
          ))}
       
  
    </Container>
        </div>
    );
};

export default ManageOrder;