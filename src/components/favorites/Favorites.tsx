import "./favorites.scss";
import { Title, Card } from "../UI";
import Slider from "react-slick";

// favorite restaurants images
import claro from "../../assets/claro.jpg";
import lumina from "../../assets/mizlala-gret-mullet-fillet.jpg";
import tigerLilly from "../../assets/tiger-lili.jpg";

// favorite dishes images
import padKi from "../../assets/rectangle.png";
import garbanzo from "../../assets/rectangle2.png";
import smokedPizza from "../../assets/rectangle3.png";

// food types icons
import spicyIcon from "../../assets/spicy-icon.svg";
import vegIcon from "../../assets/vegetarian.svg";
import veganIcon from "../../assets/vegan-icon.svg";

//slides settings
import { settings, dishSettings } from "./slidesSettings";

const Favorites = () => {
  return (
    <section className="favorites padding-y">
      <div className="container">
        <Title title="THE POPULAR RESTAURANTS IN EPICURE :" align="center" />

        <Slider
          {...settings}
          className="favorite__restaurant-slider card_slider"
        >
          <Card img={claro} title={"Claro"} description={"Ran Shmueli"} />

          <Card img={lumina} title={"Lumina"} description={"Meir Adoni"} />

          <Card
            img={tigerLilly}
            title={"Tiger Lilly"}
            description={"Yanir Green"}
          />
        </Slider>

        <button type="button" className="btn">
          All Restaurants {">>"}
        </button>

        <Title
          title="SIGNATURE DISH OF :"
          align="center"
          className="favorite__dish-title"
        />
        <Slider {...dishSettings} className="favorite__dish-slider card_slider">
          <Card
            cardTitle={"Tiger Lilly"}
            isDish={true}
            img={padKi}
            title={"Pad Ki Mao"}
            description={
              "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut"
            }
            price={88}
            icon={spicyIcon}
          />
          <Card
            cardTitle={"Kab Kem"}
            isDish={true}
            img={garbanzo}
            title={"Garbanzo Frito"}
            description={
              "Polenta fingers, veal cheek,magic chili cured lemon cream, yellow laksa"
            }
            price={98}
          />

          <Card
            cardTitle={"Popina"}
            isDish={true}
            img={smokedPizza}
            title={"Smoked Pizza"}
            description={
              'Basil dough, cashew "butter", demi-glace, bison & radish'
            }
            price={65}
            icon={veganIcon}
          />
        </Slider>
      </div>
    </section>
  );
};

export default Favorites;
