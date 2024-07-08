import { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <form className="place-order">
      <div className="place-order__left">
        <p className="place-order__left__title">Delivery Information</p>
        <div className="place-order__left__multi-fields">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>
        <div className="place-order__left__multi-fields">
          <input type="email" placeholder="Email address" />
        </div>
        <div className="place-order__left__multi-fields">
          <input type="text" placeholder="Street" />
        </div>
        <div className="place-order__left__multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="place-order__left__multi-fields">
          <input type="text" placeholder="Zip Code" />
          <input type="text" placeholder="Country" />
        </div>
        <div className="place-order__left__multi-fields">
          <input type="text" placeholder="Phone" />
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
        <button className="cart__bottom__button">PROCEED TO PAYMENT</button>
      </div>
    </form>
  );
};

export default PlaceOrder;
