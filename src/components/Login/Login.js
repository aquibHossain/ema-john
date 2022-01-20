import React from 'react';
import { Link,useLocation,useHistory } from 'react-router-dom';
import useAuthContext from '../Contexts/useAuthContext';

const Login = () => {
  const {googleSignIn}=useAuthContext()
  const location=useLocation()
  const history =useHistory()
  const url=location.state?.from || "/shop"
  console.log(location.state?.from);

  const hangleGoogle=()=>{
    googleSignIn() .then((result) => {
      history.push(url)
     })
  }

    return (
        <div>
            <form className="w-50 mx-auto p-5">
  <div className="mb-3">
    <label  htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input  type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
<p className="text-center">New User?<Link to="/register">Create account</Link></p>
<div className="text-center p-5">
    <p>*********************************</p>
   <button onClick={hangleGoogle} className="cart-button">Google Login</button>
    </div>
        </div>
    );
};

export default Login;