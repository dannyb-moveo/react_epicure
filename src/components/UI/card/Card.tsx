import "./card.scss";
import food1 from "../../../assets/claro.jpg";

//dish tag icons
import spicyIcon from "../../../assets/spicy-icon.svg";
import vegeterianIcon from "../../../assets/vegetarian.svg";
import veganIcon from "../../../assets/vegan-icon.svg";

type CardProps = {
  cardTitle?: string;
  isDish?: boolean;
  isCOFW?: boolean;
  price?: number;
  img?: string;
  title?: string;
  description?: string;
  ingredients?: string[];
  tags?: string[];
};

const Card = ({
  cardTitle,
  isDish,
  isCOFW,
  img,
  title,
  description,
  price,
  ingredients,
  tags,
}: CardProps) => {
  const dishTags: { [key: string]: string } = {
    vegan: veganIcon,
    spicy: spicyIcon,
    vegetarian: vegeterianIcon,
  };

  return (
    <article>
      {cardTitle && <h3 className="card_title">{cardTitle}</h3>}
      <div className="card">
        <div className="card_img">
          <img src={img || food1} alt="fav1" />
        </div>

        <div className="card_content">
          <div className="card_content-text">
            <h3>{title || "title"}</h3>
            {!isCOFW && (
              <p>
                {description ||
                  ingredients?.map((ingredient, index) => {
                    if (index === ingredients.length - 1) return ingredient;
                    return ingredient + ", ";
                  })}
              </p>
            )}
          </div>

          {isDish && (
            <div className="card_content-dish">
              {/* {icon && ( */}
              <div className="card_icon">
                {tags?.map((tag, index) => (
                  <img key={index} src={dishTags[tag]} alt={tag}></img>
                ))}
                {/* <img src={icon} alt="food type" /> */}
              </div>
              {/* )} */}

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
    </article>
  );
};

export default Card;
