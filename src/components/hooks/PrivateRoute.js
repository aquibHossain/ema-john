
import React from 'react';
import { Route,Redirect } from 'react-router-dom';
import useAuthContext from '../Contexts/useAuthContext';


const PrivateRoute = ({ children, ...rest }) => {
    const {user}=useAuthContext()
    return (
      <Route
        {...rest}
        render={({ location }) =>
          user.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }
export default PrivateRoute;