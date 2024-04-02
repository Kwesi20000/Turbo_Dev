import { useContext } from 'react'
import './Cart.css'
import StoreContextProvider from '../../context/StoreContext';

const Cart = () => {

  const {cartItems,food_list,removeFromCart} = useContext(StoreContextProvider);


  return (
    <div>

    </div>
  )
}

export default Cart