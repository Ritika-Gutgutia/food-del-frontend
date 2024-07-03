/* eslint-disable no-unused-vars */
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";
// import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
const ExploreMenu = ({ category, setCategory }) => {
  const handleClick = (menu_item) => {
    console.log(menu_item);
    setCategory((prev) => (prev === menu_item ? "All" : menu_item));
    console.log(category, "HELLO");
  };

  return (
    <div className="explore-menu">
      <h1 className="explore--menu__heading"> Explore our menu </h1>
      <p className="explore--menu__paragraph">
        Choose from a diverse menu featuring a delectable array of dishes
        crafted with the finest ingredients and culinary expertise. Our mission
        is to satisfy your cravings.
      </p>
      <div className="explore--menu__list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() => handleClick(item.menu_name)}
              key={index}
              className="explore--menu__list__item"
            >
              <img
                className={`explore--menu__list__item__img ${
                  category === item.menu_name
                    ? "explore--menu__list__item__img__active"
                    : ""
                }`}
                src={item.menu_image}
                alt=""
              />
              <p className="explore--menu__list__item__text">
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>
      <hr className="explore--menu__hr" />
    </div>
  );
};

export default ExploreMenu;
