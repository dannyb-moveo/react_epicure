import {
  Navbar,
  Hero,
  Cuisines,
  Service,
  COTW,
  About,
  Footer,
  Sidebar,
} from "../components";
import "./home.scss";

const Home = () => {
  return (
    <>
      {/* <Sidebar /> */}
      <Navbar />
      <Hero />
      <Cuisines />
      <Service />
      <COTW />
      {/* 
      <About />
      <Footer /> */}
    </>
  );
};

export default Home;
