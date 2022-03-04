import "./cuisines.scss";
import { Title, Card } from "..";

const Cuisines = () => {
    return (
        <section className="cuisines padding-y">
            <div className="container">
                <Title
                    title="THE POPULAR RESTAURANTS IN EPICURE :"
                    align="center"
                />

                <div className="cuisines_card-wrap restaurants_cards">
                    <Card />
                    <Card />
                    <Card />
                    <button type="button" className="btn">
                        All Restaurants {">>"}
                    </button>
                </div>

                <Title title="SIGNATURE DISH OF :" align="center" />

                <div className="cuisines_card-wrap dish_cards">
                    <Card isDish={true} />
                    <Card isDish={true} />
                    <Card isDish={true} />
                </div>
            </div>
        </section>
    );
};

export default Cuisines;
