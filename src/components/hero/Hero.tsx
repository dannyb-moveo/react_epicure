import { Searchbar } from "../UI";
import { chefsActions } from "../../store/chefs-slice";

import "./hero.scss";
import { useAppDispatch } from "../../store";

const Hero = () => {
  const dispatch = useAppDispatch();
  return (
    <>
      <section className="hero">
        <div className="hero_search-container">
          <h3>
            Epicure works with the top <br /> chef restaurants in Tel Aviv
          </h3>

          <Searchbar iconPos="left" />
        </div>
      </section>

      <section className="hero__nav">
        <div className="hero__nav-container">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => dispatch(chefsActions.toggle())}
          >
            CHEFS
          </button>
          <button type="button" className="btn btn-primary">
            RESTAURANTS
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;
