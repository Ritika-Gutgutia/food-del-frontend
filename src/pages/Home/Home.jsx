import ExploreMenu from "../../components/ExploreMenu/ExploreMenu.jsx";
import Header from "../../components/Header/Header.jsx";
import "./Home.css";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay.jsx";
import AppDownload from "../../components/AppDownload/AppDownload.jsx";

const Home = () => {
  return (
    <div>
      <Header />
      <ExploreMenu />
      <FoodDisplay />
      <AppDownload />
    </div>
  );
};

export default Home;
