import Title from "../title/Title";
import "./service.scss";

import spicyIcon from "../../assets/spicy-icon.svg";
import vegIcon from "../../assets/vegetarian.svg";
import veganIcon from "../../assets/vegan-icon.svg";

const Service = () => {
    return (
        <section className="service padding-y">
            <div className="container">
                <Title title="THE MEANING OF OUR ICONS :" align="center" />

                <div className="service_tags">
                    <div>
                        <img src={spicyIcon} alt="spicy" />
                        <p>Spicy</p>
                    </div>
                    <div>
                        <img src={vegIcon} alt="vegetarian" />
                        <p>Vegetarian</p>
                    </div>
                    <div>
                        <img src={veganIcon} alt="vegan" />
                        <p>Vegan</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;
