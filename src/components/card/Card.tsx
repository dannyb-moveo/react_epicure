import "./card.scss";
import food1 from "../../assets/claro.jpg";

type CardProps = {
  isDish?: boolean;
  isCOFW?: boolean;
  price?: number;
  img?: string;
  icon?: string;
  title?: string;
  description?: string;
};

const Card = ({
  isDish,
  isCOFW,
  img,
  title,
  description,
  price,
  icon,
}: CardProps) => {
  return (
    <>
      <div className="card">
        <div className="card_img">
          <img src={img || food1} alt="fav1" />
        </div>

        <div className="card_content">
          <div className="card_content-text">
            <h3>{title || "title"}</h3>
            {!isCOFW && <p>{description || "description"}</p>}
          </div>

          {isDish && (
            <div className="card_content-dish">
              {icon && (
                <div className="card_icon">
                  <img src={icon} alt="food type" />
                </div>
              )}

              <div className="card_content-price">
                <p>
                  <span>&#8362;</span>
                  {price}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
