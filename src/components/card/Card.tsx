import "./card.scss";
import food1 from "../../assets/claro.jpg";

import spicyIcon from "../../assets/spicy-icon.svg";
import vegIcon from "../../assets/vegetarian.svg";
import veganIcon from "../../assets/vegan-icon.svg";

type CardProps = {
    isDish?: boolean;
    isCOFW?: boolean;
    price?: number;
};

const Card = ({ isDish, isCOFW }: CardProps) => {
    return (
        <>
            <div className="card">
                <div className="card_img">
                    <img src={food1} alt="fav1" />
                </div>
                <div className="card_text">
                    <h3>Title</h3>
                    {!isCOFW && <p>description</p>}
                </div>
                {isDish && (
                    <div className="card_icon">
                        <img src={spicyIcon} alt="spicy" />
                    </div>
                )}
                {isDish && (
                    <div className="card_dish">
                        <div className="line"></div>
                        <p>&#8362; 25</p>
                        <div className="line"></div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Card;
