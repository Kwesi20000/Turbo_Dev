import './ExploreMenu.css'; // Import ExploreMenu CSS styles
import { menu_list } from '../../assets/assets'; // Import menu_list data from assets

// ExploreMenu component definition
const ExploreMenu = ({ category, setCategory }) => {
    return (
        <div>
            {/* ExploreMenu container */}
            <div className="explore-menu" id='explore-menu'>
                <h1>Explore our menu</h1> {/* Heading */}
                <p className='explore-menu-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias neque nulla, veniam possimus architecto harum molestiae natus quisquam, in id, nemo necessitatibus sunt ullam animi quos laboriosam atque. Laboriosam, necessitatibus!</p> {/* Text */}
                {/* ExploreMenu list */}
                <div className="explore-menu-list">
                    {/* Map through menu_list data */}
                    {menu_list.map((item, index) => {
                        return (
                            // ExploreMenu list item
                            <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index} className='explore-menu-list-item'>
                                {/* Menu image */}
                                <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
                                {/* Menu name */}
                                <p>{item.menu_name}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
            <hr /> {/* Horizontal line */}
        </div>
    );
};

export default ExploreMenu; // Export ExploreMenu component
