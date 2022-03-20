import Slider from "react-slick";
import { settings } from "./cotwSliderSettings";
import { Title, Card } from "../UI";
import "./cotw.scss";

// card images
import { useAppDispatch, useAppSelector } from "../../store";
import { useEffect } from "react";
import { fetchChefRestaurants, fetchChefs } from "../../store/chefs-slice";

const COTW = () => {
  const dispatch = useAppDispatch();
  const { cotwRestaurants, isChefsLoading, cotw, isCotwLoading } =
    useAppSelector((state) => state.chefs);

  useEffect(() => {
    dispatch(fetchChefs());
  }, []);

  useEffect(() => {
    if (cotw._id) {
      dispatch(fetchChefRestaurants(cotw._id));
    }
  }, [cotw]);

  if (isChefsLoading || isCotwLoading) {
    // loader
    return <div>loading</div>;
  }

  return (
    <section className="COTW padding-y">
      <div className="container COTW_container">
        <Title title="CHEF OF THE WEEK :" align="center" />

        <div className="COTW_info">
          <div className="COTW_img">
            <img src={cotw.image} alt="chef" />
            <div className="COTW_img-name">
              <h1>{cotw.name}</h1>
            </div>
          </div>
          <p>{cotw.description}</p>
        </div>
        <h2 className="COTW_restaurants-title">Yossi’s restaurants :</h2>
        <Slider {...settings} className="card_slider COTW_restaurants-slider">
          {/* <Card isCOFW={true} title={"Onza"} img={onza} />
          <Card isCOFW={true} title={"Kitchen Market"} img={kitchenMarket} />
          <Card isCOFW={true} title={"Mashya"} img={mashya} /> */}
          {cotwRestaurants.map((restaurant, index) => {
            const { name, image } = restaurant;
            return <Card key={index} isCOFW title={name} img={image} />;
          })}
        </Slider>
      </div>
    </section>
  );
};

export default COTW;
