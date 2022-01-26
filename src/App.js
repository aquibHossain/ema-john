
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './components/Contexts/AuthProvider';
import Footer from './components/Footer/Footer';
import Header from './components/header/Header';
import PrivateRoute from './components/hooks/PrivateRoute';
import Login from './components/Login/Login';
import Manage from './components/Manage/Manage';
import ManageOrder from './components/ManageOrder/ManageOrder';
import NotFound from './components/NotFOund/NotFound';
import Order from './components/Order/Order';
import Placed from './components/Placed/Placed';
import Register from './components/Register/Register';
import Shipping from './components/Shipping/Shipping';
import Shop from './components/shop/Shop';

function App() {
 
  return (
    <div >
      
     
     <AuthProvider>
     <BrowserRouter>
     <Header></Header>
     <Switch>
       <Route exact path="/">
       <Shop></Shop>
       </Route>
       <Route path="/shop">
       <Shop></Shop>
       </Route>
       <Route path="/order">
       <Order></Order>
       </Route>
       <Route  path="/manage">
        <Manage></Manage>
       </Route>
       <PrivateRoute path="/placed">
        <Placed></Placed>
       </PrivateRoute>
       <PrivateRoute path="/shipping">
        <Shipping></Shipping>
       </PrivateRoute>
       <PrivateRoute path="/manageOrder">
        <ManageOrder></ManageOrder>
       </PrivateRoute>
       <Route path="/login">
        <Login></Login>
       </Route>
       <Route path="/register">
        <Register></Register>
       </Route>
       <Route path="*">
        <NotFound></NotFound>
       </Route>
     </Switch>
     <Footer></Footer>
     </BrowserRouter>
     </AuthProvider>
   
     
    </div>
  );
}

export default App;
