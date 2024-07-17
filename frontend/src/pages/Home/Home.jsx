import { useState } from 'react'; 
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import Header from '../../components/Header/Header';
import './Home.css';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import AppDownload from '../../components/AppDownload/AppDownload';

const Home = () => {
    // State to manage the selected category
    const [category, setCategory] = useState("All");

    return (
        <div>
            {/* Header component */}
            <Header/>
            {/* ExploreMenu component */}
            <ExploreMenu category={category} setCategory={setCategory}/>
            {/* FoodDisplay component */}
            <FoodDisplay category={category} />
            {/* AppDownload component */}
            <AppDownload/>
        </div>
    );
}

export default Home;
