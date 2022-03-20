import {
  Hero,
  Favorites,
  Service,
  COTW,
  About,
  Footer,
} from "../../components";
import "./home.scss";
import AnimatedPage from "../AnimatedPage";

const Home = () => {
  return (
    <AnimatedPage>
      <Hero />
      <Favorites />
      <Service />
      <COTW />
      <About />
      <Footer />
    </AnimatedPage>
  );
};

export default Home;
