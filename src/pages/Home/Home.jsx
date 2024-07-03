import { useState } from "react";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu.jsx";
import Header from "../../components/Header/Header.jsx";
import "./Home.css";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay.jsx";

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
    </div>
  );
};

export default Home;
