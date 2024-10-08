/* eslint-disable no-prototype-builtins */
/* eslint-disable react/prop-types */
import { useContext } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import "./FoodItem.css";

const FoodItem = ({ id, name, price, description, img }) => {
  const { cartItems, addToCart, removeFromCart, url } =
    useContext(StoreContext);
  console.log(id);
  // const handleClickAddIcon = () => {
  //   setItemCount((prevCount) => prevCount + 1);
  // };

  // const handleClickRemoveIcon = () => {
  //   setItemCount((prevCount) => prevCount - 1);
  //b };
  return (
    <div className="food-item">
      <div className="food-item__img__container">
        <img className="food-item__img" src={url + "/uploads/" + img} alt="" />
        {!cartItems || !(id in cartItems) ? (
          <img
            className="food-item__add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt="addIcon"
          />
        ) : (
          <div className="food-item__counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt="removeIconRed"
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt="addIconGreen"
            />
          </div>
        )}
      </div>
      <div className="food-item__info">
        <div className="food-item__info__name__rating">
          <p className="food-item__info__name__rating__p">{name}</p>
          <img
            className="food-item__info__name__rating__img"
            src={assets.rating_starts}
            alt=""
          />
        </div>
        <p className="food-item__info__desc">{description}</p>
        <p className="food-item__info__price">Rs.{price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
