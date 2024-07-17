import React, { useContext } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets'; // Importing assets
import { StoreContext } from '../../context/StoreContext'; // Importing StoreContext for managing cart state

const FoodItem = ({ id, name, price, description, image }) => {
  // Destructuring cartItems, addToCart, and removeFromCart from StoreContext
  const { cartItems, addToCart, removeFromCart,url } = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        {/* Food item image */}
        <img className='food-item-image' src={url+"/images/"+image} alt="" />

        {/* Conditional rendering for add/remove icons based on cartItems */}
        {!cartItems[id]
          ? <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" />
          : <div className='food-item-counter'>
              <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
              <p>{cartItems[id]}</p>
              <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
            </div>
        }
      </div>

      {/* Food item information */}
      <div className="food-item-info">
        {/* Food item name and rating */}
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>

        {/* Food item description */}
        <p className="food-item-desc">{description}</p>

        {/* Food item price */}
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
