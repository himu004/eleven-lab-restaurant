import { useContext } from "react";
import Banner from "../../components/Banner/Banner";
import OurChef from "../../components/OurChef";
import Reviews from "../../components/Reviews";
import TopFoods from "../../components/TopFoods";
import { ThemeContext } from "../../providers/Context";
import Quotes from "../../components/Quotes";
import FoodShowcase from "../../components/FoodShowcase/FoodShowcase";

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <Banner theme={theme} />
     
      <TopFoods theme={theme} />
      <Quotes />
      <FoodShowcase />
      <Reviews theme={theme} />
      <OurChef theme={theme} />
    </div>
  );
};

export default Home;
