import About from "../About/About";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import Phone from "../Phone/Phone";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <About></About>
      <PopularMenu></PopularMenu>
      <Phone></Phone>
      <ChefRecommends></ChefRecommends>
    </div>
  );
};

export default Home;
