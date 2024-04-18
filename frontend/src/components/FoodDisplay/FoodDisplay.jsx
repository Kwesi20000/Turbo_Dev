import { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({category}) => {
    // Access the food_list array from the StoreContext
    const { food_list } = useContext(StoreContext);

    return (
        <div>
            <div className="food-display" id='food-display'>
                <h2>Top dishes near you</h2>
                <div className="food-display-list">
                    {/* Map through the food_list array */}
                    {food_list.map((item, index) => {
                        // Log category and item.category to the console
                        console.log(category, item.category);
                        // Check if the category matches "All" or item.category
                        if (category === "All" || category === item.category) {
                            // Render FoodItem component with item details
                            return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />;
                        }
                        // Return nothing if the category doesn't match
                        return null;
                    })}
                </div>
            </div>
        </div>
    );
}

export default FoodDisplay;
