import { useState } from "react";
import { restaurants } from "../utils/restaurants";
import { RestaurantCard } from "./RestaurantCard";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(restaurants);

  const filterTopRestaurants = () => {
    const filteredList = listOfRestaurants.filter(
      (res) => res.info.avgRating > 4
    );
    setListOfRestaurants(()=>filteredList);
  };
  
  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="Search" />
        <button onClick={filterTopRestaurants} className="filter-btn">
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurants-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
