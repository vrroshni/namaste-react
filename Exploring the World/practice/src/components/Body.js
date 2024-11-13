import { useState, useEffect } from "react";
import { RestaurantCard } from "./RestaurantCard";
import { SWIGGY_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const filterTopRestaurants = () => {
    const filteredList = listOfRestaurants.filter(
      (res) => res.info.avgRating > 4.5
    );
    setListOfRestaurants(() => filteredList);
  };

  useEffect(() => {
    fetchData();
    console.log("useeffect called");
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_URL);
    const res = await data.json();
    const restaurants =
      res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setListOfRestaurants(restaurants);
  };

  // if(listOfRestaurants.length===0){
  //   return<h1>Loadingggggggggg.........</h1>
  // }

  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="Search" />
        <button onClick={filterTopRestaurants} className="filter-btn">
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurants-container">
        {
        listOfRestaurants?.length === 0 ? (
          <>
            {[0, 1, 2, 3, 4].map((key) => 
              <Shimmer key={key} />
            )}
          </>
        ) : (
          <>
            {listOfRestaurants.map((restaurant) => (
              <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Body;
