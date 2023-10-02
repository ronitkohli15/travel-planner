import logo from './logo.svg';
import './App.css';
import Home from './home/home';
import Header from './header/header'
import Register from './auth/user_register';
import Card from './cards/cards';
import Login from './login/login';
import Internary from './iternary/internary';
import Payment from './payments/payment';
import Rooms from './rooms/rooms';

import Hotels from './hotels/hotels';
import {Route ,Routes} from 'react-router-dom';
import Package from './package/package';

function App() {
  return (

    <Routes>
      
<Route path="/" exact element={<Home/>}/>
      <Route path="/register" exact element={<Register/>}/>
      <Route path="/card" exact element={<Card/>}/>
      <Route path="/login" exact element={<Login/>}/>
      <Route path="/hotels" exact element={<Hotels/>}/>
      <Route path="/package" exact element={<Package/>}/>
      <Route path="/iternary" exact element={<Internary/>}/>
      <Route path="/payment" exact element={<Payment/>}/>
      <Route path="/rooms" exact element={<Rooms/>}/>
      

      
      

    </Routes>
    
 
  );
}

export default App;
