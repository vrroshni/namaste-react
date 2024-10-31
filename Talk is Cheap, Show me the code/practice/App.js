import React from "react";
import ReactDOM from "react-dom/client";

// Planning
/**
 * Header
 *  -Logo
 *  -Nav items
 *
 * Body
 *  -Search
 *  -Restaurant Container
 *      - Reastaurants
 *
 * Footer
 *  -Copyrights
 *  -Links
 *  -Address
 *  -Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src="https://png.pngtree.com/template/20200309/ourmid/pngtree-healthy-food-logo-with-plate-spoon-and-fork-line-art-image_355051.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Contact Us</li>
          <li>About Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="Search" />
      </div>
      <div className="restaurants-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  return <div className="restaurant-card">
    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/bb92d265-d805-4244-ae37-9843073e8b08_34241.jpg"/>
    <h2>Meghana foods</h2>
    <h4>Biryani, North Indians</h4>
    <h4>4.4 Stars</h4>
    <h4>38 minutes</h4>    
  </div>;
};

const AppLayout = () => {
  return (
    <div className="app">
      {/* Header */}
      <Header />

      {/* Body */}
      <Body />
      {/* Footer */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
