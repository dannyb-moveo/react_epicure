import React from "react";
import { Card, Title } from "..";
import "./cotw.scss";
import chefImg from "../../assets/untitled-1.jpg";

// card images
import onza from "../../assets/onza.png";
import kitchenMarket from "../../assets/kitchen-market.png";
import mashya from "../../assets/mashya.png";

const COTW = () => {
  return (
    <section className="COTW padding-y">
      <div className="container COTW_container">
        <Title title="CHEF OF THE WEEK :" align="center" />

        <div className="COTW_info">
          <div className="COTW_img">
            <img src={chefImg} alt="chef" />
            <div className="COTW_img-name">
              <h1>Yossi Shitrit</h1>
            </div>
          </div>
          <p>
            Chef Yossi Shitrit has been living and breathing his culinary dreams
            for more than two decades, including running the kitchen in his
            first restaurant, the fondly-remembered Violet, located in Moshav
            Udim. Shitrit's creativity and culinary acumen born of long
            experience are expressed in the every detail of each and every dish.
          </p>
        </div>
        <h2 className="COTW_reataurants-title">Yossi’s restaurants :</h2>
        <div className="COTW_restaurants">
          <Card isCOFW={true} title={"Onza"} img={onza} />
          <Card isCOFW={true} title={"Kitchen Market"} img={kitchenMarket} />
          <Card isCOFW={true} title={"Mashya"} img={mashya} />
        </div>
      </div>
    </section>
  );
};

export default COTW;
