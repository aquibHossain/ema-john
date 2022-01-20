import { Link } from 'react-router-dom';
import useAuthContext from '../Contexts/useAuthContext';

const Register = () => {
    const {googleSignIn}=useAuthContext()
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
<div className="mb-3">
<label htmlFor="exampleInputPassword2" className="form-label">Re-type Password</label>
<input type="password" className="form-control" id="exampleInputPassword2"/>
</div>

<button type="submit" className="btn btn-primary">Submit</button>
</form>
<p className="text-center">Already have an account?<Link to="/login">Log in</Link></p>
<div className="text-center p-5">
    <p>*********************************</p>
   <button onClick={googleSignIn} className="cart-button">Google Login</button>
    </div>
    </div>
  
    );
};

export default Register;