import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import  Products  from '../../hook/Effect'  ;
import Product from '../Products/Products';

const Items = () => {
    const [product]=Products()
    return (
        <div className='text-center my-5'>
            <h1>New Collections</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
                Aliquid, totam.</p>
                <Container>
      <Grid container spacing={4} className="mb-5">
  {
  product.slice(0,4).map(category=><Product key={category._id} category={category}></Product>)
  }
</Grid>
</Container>
        </div>
    );
};

export default Items;