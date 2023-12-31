import { Helmet } from "react-helmet-async";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import Featured from "../Featured/Featured";
import Phone from "../Phone/Phone";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home </title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <About></About>
      <PopularMenu></PopularMenu>
      <Phone></Phone>
      <ChefRecommends></ChefRecommends>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
