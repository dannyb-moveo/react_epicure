import "./favorites.scss";
import { Title, Card } from "../UI";
import Slider from "react-slick";

//interface
import dishInterface from "../../interfaces/dish.interface";

// favorite restaurants images
import arrows from "../../assets/all-restaurants-arrows.svg";

// food types icons
import veganIcon from "../../assets/vegan-icon.svg";

//slides settings
import { restaurantSettings, dishSettings } from "./slidesSettings";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { fetchRestaurants } from "../../store/restaurants-slice";
import { fetchDishes } from "../../store/dishes-slice";

const Favorites = () => {
  const dispatch = useAppDispatch();
  const { dishes, isLoading: isDishesLoading } = useAppSelector(
    (state) => state.dishes
  );
  const { restaurants, isLoading: isRestaurantsLoading } = useAppSelector(
    (state) => state.restaurants
  );

  useEffect(() => {
    dispatch(fetchRestaurants());
    dispatch(fetchDishes());
  }, []);

  if (isRestaurantsLoading || isDishesLoading) {
    // implement loader here
    return <div>hello</div>;
  }

  return (
    <section className="favorites padding-y">
      <div className="container">
        <Title title="THE POPULAR RESTAURANTS IN EPICURE :" align="center" />

        <div className="favorite__restaurant-slider-wrapper">
          <Slider
            {...restaurantSettings}
            className="favorite__restaurant-slider card_slider"
          >
            {restaurants.map((restaurant, index) => {
              const {
                image,
                name,
                chef: { name: chefName },
              } = restaurant;
              return (
                <Card
                  key={index}
                  img={image}
                  title={name}
                  description={chefName}
                ></Card>
              );
            })}
          </Slider>

          <div className="favorite-restaurant-button">
            <button type="button" className="btn">
              All Restaurants <img src={arrows} alt="arrows" />
            </button>
          </div>
        </div>

        <Title
          title="SIGNATURE DISH OF :"
          align="center"
          className="favorite__dish-title"
        />
        <Slider {...dishSettings} className="favorite__dish-slider card_slider">
          {dishes.map((dish, index) => {
            const {
              name,
              price,
              image,
              restaurant: { name: restaurantName },
              tags,
              ingredients,
            }: dishInterface = dish;
            return (
              <Card
                key={index}
                isDish
                img={image}
                cardTitle={restaurantName}
                title={name}
                price={price}
                ingredients={ingredients}
                tags={tags}
              />
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default Favorites;
