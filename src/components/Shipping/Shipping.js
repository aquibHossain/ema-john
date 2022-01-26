import React from 'react';
import { useForm } from 'react-hook-form';
import { clearTheCart } from '../../utilities/fakedb';
import useAuthContext from '../Contexts/useAuthContext';
import { displayData } from '../Database/fakedb';

const Shipping = () => {
    const {user}=useAuthContext()
    const { register,reset, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
  
      const savedCart=displayData();
      console.log("submit",savedCart);
      data.order=savedCart;
      console.log(data);

      fetch('https://intense-dawn-27289.herokuapp.com/orders',{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(data)
      })
      .then(res=>res.json())
      .then(data=>{
        // console.log(data);
        if(data.insertedId){
          alert("Order has been placed");
          reset();
          clearTheCart();
        }
      })
    
    }
  
    return (
      <form className="d-flex flex-column w-50 mx-auto p-5 my-5 " onSubmit={handleSubmit(onSubmit)}>
        
        <input placeholder="Name" className="my-3" defaultValue={user.displayName} {...register("name")} />
        
        <input className="my-3" placeholder="Email" defaultValue={user.email} {...register("email", { required: true })} />
        {errors.email && <span>This field is required</span>}
        <input className="my-3" placeholder="Address" {...register("address")} />
        <input className="my-3" placeholder="Color" {...register("color")} />
        
        
        <input className="w-25 mx-auto" type="submit" />
      </form>
    );
  }
export default Shipping;