/* eslint-disable no-unused-vars */
import "./FoodDisplay.css";
import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = () => {
  const { food_list, category } = useContext(StoreContext);

  return (
    <div className="food-display" id="food-display">
      <h2 className="food-display__heading">Top dishes near you</h2>
      <div className="food-display__list">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                price={item.price}
                img={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
