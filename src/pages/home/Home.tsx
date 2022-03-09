import {
  Hero,
  Favorites,
  Service,
  COTW,
  About,
  Footer,
} from "../../components";
import "./home.scss";

const Home = () => {
  return (
    <main>
      <Hero />
      <Favorites />
      <Service />
      <COTW />
      <About />
      <Footer />
    </main>
  );
};

export default Home;
