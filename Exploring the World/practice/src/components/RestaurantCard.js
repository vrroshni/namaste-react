import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    // console.log(props);
    const { name, avgRating ,cuisines,cloudinaryImageId,costForTwo,sla} = props;
    return (
      <div className="restaurant-card">
        <img src={CDN_URL+cloudinaryImageId} />
        <h2>{name}</h2>
        <h4>{cuisines?.join(", ")}</h4>
        <h4>{avgRating} Stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla?.deliveryTime} minutes</h4>
      </div>
    );
  };

  export {RestaurantCard}