/* eslint-disable no-unused-vars */
import { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../../components/FoodItem/FoodItem";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);

  const navigate = useNavigate();

  const handleCrossClick = (item) => {
    removeFromCart(item._id);
  };
  return (
    <div className="cart">
      <div className="cart__items">
        <div className="cart-items__title">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <>
                <div key={index} className="cart-items__title cart-items__item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>Rs.{item.price * 80}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>Rs.{item.price * 80 * cartItems[item._id]}</p>
                  <p
                    onClick={() => handleCrossClick(item)}
                    className="cart-items__cross"
                  >
                    x
                  </p>
                </div>
                <hr className="cart-items__hr" />
              </>
            );
          }
        })}
      </div>
      <div className="cart__bottom">
        <div className="cart__bottom__total">
          <h2> Cart Totals</h2>
          <div>
            <div className="cart__bottom__total__details">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <hr className="cart__bottom__total__hr" />
            <div className="cart__bottom__total__details">
              <p> Delivery Fee </p>
              <p>{getTotalCartAmount() > 0 ? 80 : 0}</p>
            </div>
            <hr className="cart__bottom__total__hr" />
            <div className="cart__bottom__total__details">
              <b>Total</b>
              <b>
                {getTotalCartAmount() + (getTotalCartAmount() > 0 ? 80 : 0)}
              </b>
            </div>
          </div>
          <button
            onClick={() => navigate("/order")}
            className="cart__bottom__button"
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="cart__bottom__promocode">
          <div>
            <p className="cart__bottom__promocode__paragraph">
              If you have a promocode, enter it here
            </p>
            <div className="cart__bottom__promocode__input">
              <input type="text" placeholder="promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
