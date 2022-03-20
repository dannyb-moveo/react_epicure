import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store";
import { fetchSearchQuery } from "../../store/search-slice";
import { Title, Card, Loader } from "../../components/UI";
import Slider from "react-slick";
import dishInterface from "../../interfaces/dish.interface";
import {
  restaurantSettings,
  dishSettings,
} from "../restaurants/sliderSettings";
import "./search.scss";
import AnimatedPage from "../AnimatedPage";

const Search = () => {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("name") || "";
  const { searchResults, isLoading } = useAppSelector((state) => state.search);

  useEffect(() => {
    if (searchTerm) {
      dispatch(fetchSearchQuery(searchTerm));
    }
  }, [searchTerm]);

  if (isLoading) {
    //loader
    // return <div>loading...</div>;
    return <Loader loading={isLoading} marginTop="5" />;
  }

  if (!searchResults.length) {
    return <div>no search query</div>;
  }

  const [results] = searchResults;
  const {
    chefs,
    dishes,
    restaurants,
  }: { chefs: []; dishes: []; restaurants: [] } = results;

  return (
    <AnimatedPage>
      <section className="padding-y">
        <div className="search__container container">
          {/* Restaurants slider */}
          {restaurants.length > 0 && (
            <>
              <Title title="Restaurants :" align="left" />
              <Slider
                {...restaurantSettings}
                className="search__restaurants-slider card_slider"
              >
                {restaurants.map((rest, i) => {
                  const {
                    image,
                    name,
                    chef: { name: chefName },
                  } = rest;

                  return (
                    <Card
                      key={i}
                      img={image}
                      title={name}
                      description={chefName}
                    ></Card>
                  );
                })}
              </Slider>
            </>
          )}
          {/* End of Restaurants slider */}

          {/* Dishes slider */}
          {dishes.length > 0 && (
            <>
              <Title
                title="Dishes :"
                align="left"
                className="search__dishes-title"
              />
              <Slider
                {...dishSettings}
                className="search__dishes-slider card_slider"
              >
                {dishes.map((dish, i) => {
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
                      key={i}
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
            </>
          )}
          {/* End of Dishes slider */}

          {/* Chefs Slider */}
          {chefs.length > 0 && (
            <>
              <Title
                title="Chefs :"
                align="left"
                className="search__chefs-title"
              />
              <Slider
                {...restaurantSettings}
                className="search__chefs-slider card_slider"
              >
                {chefs.map((chef, i) => {
                  const { name, image } = chef;
                  // return <p key={i}>{name}</p>;
                  return <Card key={i} img={image} title={name} />;
                })}
              </Slider>
            </>
          )}
          {/* End of Chefs Slider */}
          {chefs.length < 1 && restaurants.length < 1 && dishes.length < 1 && (
            <Title align="center" title={"No search results"} />
          )}
        </div>
      </section>
    </AnimatedPage>
  );
};

export default Search;
