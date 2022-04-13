import React from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { clearTheCart } from "../../utilities/fakedb";
import useAuthContext from "../Contexts/useAuthContext";
import { displayData } from "../Database/fakedb";

const Shipping = () => {
  const { user } = useAuthContext();
  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const savedCart = displayData();
    console.log("submit", savedCart);
    data.order = savedCart;
    console.log(data);

    fetch("https://intense-dawn-27289.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          alert("Order has been placed");
          reset();
          clearTheCart();
        }
      });
  };

  return (
    <div>
      <img className="ship" src="https://pocketshop.com.bd/wp-content/uploads/2020/07/238-2388762_place-your-order-now-hd-png-download.png" alt="" />
    <form
      className="d-flex flex-column w-50 mx-auto my-5 "
      onSubmit={handleSubmit(onSubmit)}
    >
      
      <input
        placeholder="Name"
        className="my-3 py-1"
        defaultValue={user.displayName}
        {...register("name")}
        required
      />

      <input
        className="my-3 py-1"
        placeholder="Email"
        defaultValue={user.email}
        {...register("email", { required: true })}
        required
      />
      {errors.email && <span>This field is required</span>}
      <input className="my-3 py-1" 
       placeholder="Address" 
       {...register("address")} 
       required
       />
      <input 
      className="my-3 py-1"
       placeholder="Color"
        {...register("color")} 
        required
        />

<Button type='submit' className='py-1 my-3 cart-button px-4 border-0 w-50 mx-auto' style={{backgroundColor:'goldenrod'}}>Submit</Button>{' '}
    </form>
    </div>
  );
};
export default Shipping;
