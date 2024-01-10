import { useState } from 'react';
import './App.css';
import Header from './components/Layout/Header';
import Meals from'./components/Meals/Meals';
import {CartProvider} from './store/CartProvider';
import Cart from './components/Cart/Cart';
import User from './components/Cart/User';

function App() {
    const[cartIsShown, setCartIsShown] = useState(false);
    const isUserSet = window.localStorage.getItem('isSet');
    const showCartHandler = () => {
      setCartIsShown(true);
    };

    const hideCartHandler = () =>{
      setCartIsShown(false);
    };


  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler} onClose={hideCartHandler}/>
        <main>
         
        {isUserSet ?  <Meals/> : <User/>}
          
        </main>
    </CartProvider>

  );
}

export default App;
