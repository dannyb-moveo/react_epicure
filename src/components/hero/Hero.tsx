import { Searchbar } from "..";
import "./hero.scss";

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero_search-container">
                <h3>
                    Epicure works with the top <br /> chef restaurants in Tel
                    Aviv
                </h3>

                <Searchbar iconPos="left" />
            </div>
        </section>
    );
};

export default Hero;
