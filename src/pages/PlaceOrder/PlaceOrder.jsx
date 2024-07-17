/* eslint-disable no-unused-vars */
import { useContext, useDebugValue, useEffect, useState } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const { getTotalCartAmount, token, food_list, cartItems, url } =
    useContext(StoreContext);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const navigate = useNavigate();
  useEffect(() => {
    console.log(data);
  }, [data]);

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];

    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });

    // console.log(orderItems);

    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() > 0 ? getTotalCartAmount() + 80 : 0,
    };

    let respone = await axios.post(url + "/api/order/place", orderData, {
      headers: { token },
    });

    if (respone.data.success) {
      const { session_url } = respone.data;
      window.location.replace(session_url);
    } else {
      alert("Error");
    }
  };

  useEffect(() => {
    if (!token || getTotalCartAmount() === 0) {
      navigate("/cart");
    }
  }, [token]);

  return (
    <form onSubmit={placeOrder} className="place-order">
      <div className="place-order__left">
        <p className="place-order__left__title">Delivery Information</p>
        <div className="place-order__left__multi-fields">
          <input
            required
            onChange={onChangeHandler}
            name="firstName"
            value={data.firstName}
            type="text"
            placeholder="First name"
          />
          <input
            required
            onChange={onChangeHandler}
            name="lastName"
            value={data.lastName}
            type="text"
            placeholder="Last name"
          />
        </div>
        <div className="place-order__left__multi-fields">
          <input
            required
            onChange={onChangeHandler}
            name="email"
            value={data.email}
            type="email"
            placeholder="Email address"
          />
        </div>
        <div className="place-order__left__multi-fields">
          <input
            required
            onChange={onChangeHandler}
            name="street"
            value={data.street}
            type="text"
            placeholder="Street"
          />
        </div>
        <div className="place-order__left__multi-fields">
          <input
            required
            onChange={onChangeHandler}
            name="city"
            value={data.city}
            type="text"
            placeholder="City"
          />
          <input
            required
            type="text"
            onChange={onChangeHandler}
            name="state"
            value={data.state}
            placeholder="State"
          />
        </div>
        <div className="place-order__left__multi-fields">
          <input
            required
            onChange={onChangeHandler}
            name="zipcode"
            value={data.zipcode}
            type="text"
            placeholder="Zip Code"
          />
          <input
            required
            onChange={onChangeHandler}
            name="country"
            value={data.country}
            type="text"
            placeholder="Country"
          />
        </div>
        <div className="place-order__left__multi-fields">
          <input
            required
            onChange={onChangeHandler}
            name="phone"
            value={data.phone}
            type="text"
            placeholder="Phone"
          />
        </div>
      </div>
      <div className="place-order__right">
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
            <b>{getTotalCartAmount() + (getTotalCartAmount() > 0 ? 80 : 0)}</b>
          </div>
        </div>
        <button type="Submit" className="cart__bottom__button">
          PROCEED TO PAYMENT
        </button>
      </div>
    </form>
  );
};

export default PlaceOrder;
