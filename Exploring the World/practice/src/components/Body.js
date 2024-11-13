import { useState, useEffect } from "react";
import { RestaurantCard } from "./RestaurantCard";
import { SWIGGY_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [apiRestaurants, setApiRestaurants] = useState([]);
  const [value, setValue] = useState("");

  const filterTopRestaurants = () => {
    const filteredList = apiRestaurants.filter(
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
    setApiRestaurants(restaurants);
  };

  const search = () => {
    if (!value) {
      setListOfRestaurants(apiRestaurants);
    }
    const filteredList = apiRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(value.toLowerCase())
    );
    setListOfRestaurants(filteredList);
  };

  return (
    <div className="body">
      <div className="search">
        <input
          type="text"
          placeholder="Search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={search} className="filter-btn">
          Search
        </button>
        <button onClick={filterTopRestaurants} className="filter-btn">
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurants-container">
        {apiRestaurants?.length === 0 ? (
          <>
            {[0, 1, 2, 3, 4].map((key) => (
              <Shimmer key={key} />
            ))}
          </>
        ) : (
          <>
            {listOfRestaurants.length == 0 ? (
              <h1>No restaurants found</h1>
            ) : (
              <>
                {listOfRestaurants.map((restaurant) => (
                  <RestaurantCard
                    {...restaurant.info}
                    key={restaurant.info.id}
                  />
                ))}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Body;
