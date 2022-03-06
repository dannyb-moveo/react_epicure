import "./cuisines.scss";
import { Title, Card } from "..";

// popular restaurants images
import claro from "../../assets/claro.jpg";
import lumina from "../../assets/mizlala-gret-mullet-fillet.jpg";
import tigerLilly from "../../assets/tiger-lili.jpg";

// signature dishes images
import padKi from "../../assets/rectangle.png";
import garbanzo from "../../assets/rectangle2.png";
import smokedPizza from "../../assets/rectangle3.png";

// food types icons
import spicyIcon from "../../assets/spicy-icon.svg";
import vegIcon from "../../assets/vegetarian.svg";
import veganIcon from "../../assets/vegan-icon.svg";

const Cuisines = () => {
  return (
    <section className="cuisines padding-y">
      <div className="container">
        <Title title="THE POPULAR RESTAURANTS IN EPICURE :" align="center" />

        <div className="cuisines_card-wrap restaurants_cards">
          <Card img={claro} title={"Claro"} description={"Ran Shmueli"} />
          <Card img={lumina} title={"Lumina"} description={"Meir Adoni"} />
          <Card
            img={tigerLilly}
            title={"Tiger Lilly"}
            description={"Yanir Green"}
          />
          <button type="button" className="btn">
            All Restaurants {">>"}
          </button>
        </div>

        <Title title="SIGNATURE DISH OF :" align="center" />

        <div className="cuisines_card-wrap dish_cards">
          <Card
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
            isDish={true}
            img={garbanzo}
            title={"Garbanzo Frito"}
            description={
              "Polenta fingers, veal cheek,magic chili cured lemon cream, yellow laksa"
            }
            price={98}
          />

          <Card
            isDish={true}
            img={smokedPizza}
            title={"Smoked Pizza"}
            description={
              'Basil dough, cashew "butter", demi-glace, bison & radish'
            }
            price={65}
            icon={veganIcon}
          />
        </div>
      </div>
    </section>
  );
};

export default Cuisines;
