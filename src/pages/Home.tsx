import {
    Navbar,
    Hero,
    Cuisines,
    Service,
    COTW,
    About,
    Footer
} from "../components";
import "./home.scss";

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Cuisines />
            <Service />
            <COTW />
            <About />
            <Footer />
        </>
    );
};

export default Home;
