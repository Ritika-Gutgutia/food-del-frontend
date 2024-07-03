import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__contents">
        <h2 className="header__contents__heading">
          {" "}
          Order your favourite food here{" "}
        </h2>
        <p className="header__contents__paragraph">
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission is to satisfy your cravings.
        </p>
        <button className="header__contents__button">View Menu</button>
      </div>
    </div>
  );
};

export default Header;
