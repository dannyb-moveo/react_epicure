import React from "react";
import { Card, Navbar, Searchbar } from "../components";
import hero from "../assets/hero-picture.png";
import "./home.scss";

import spicy from "../assets/spicy-icon.svg";
import veg from "../assets/vegetarian.svg";
import vegan from "../assets/vegan-icon.svg";

import chef from "../assets/untitled-1.jpg";

const Home = () => {
    return (
        <>
            <Navbar />

            <section className="hero">
                <img src={hero} alt="hero-img" className="hero-img" />
                <div className="hero-search-container">
                    <h3>
                        Epicure works with the top chef restaurants in Tel Aviv
                    </h3>
                    <Searchbar />
                </div>
            </section>

            <section className="popular-restaurants padding-y">
                <div className="container">
                    <div className="title">
                        <h1>THE POPULAR RESTAURANTS IN EPICURE :</h1>
                    </div>

                    <div className="card-wrap">
                        <Card />
                        <Card />
                        <Card />
                    </div>

                    <button type="button">All Restaurants {">>"}</button>
                </div>
            </section>

            <section className="popular-restaurants padding-y">
                <div className="title">
                    <h1>SIGNATURE DISH OF :</h1>
                </div>

                <div className="card-wrap container">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </section>

            <section className="service padding-y">
                <h2>THE MEANING OF OUR ICONS :</h2>
                <div className="service_tags">
                    <div>
                        <img src={spicy} alt="" />
                        <p>Spicy</p>
                    </div>
                    <div>
                        <img src={veg} alt="" />
                        <p>Vegetarian</p>
                    </div>
                    <div>
                        <img src={vegan} alt="" />
                        <p>Vegan</p>
                    </div>
                </div>
            </section>

            <section className="COTW padding-y">
                <div className="container">
                    <h2>CHEF OF THE WEEK :</h2>
                    <div className="COTW-info">
                        <div className="COTW-img">
                            <img src={chef} alt="chef" />
                        </div>
                        <p>
                            Chef Yossi Shitrit has been living and breathing his
                            culinary dreams for more than two decades, including
                            running the kitchen in his first restaurant, the
                            fondly-remembered Violet, located in Moshav Udim.
                            Shitrit's creativity and culinary acumen born of
                            long experience are expressed in the every detail of
                            each and every dish.
                        </p>
                    </div>

                    <h2>Yossi’s restaurants :</h2>

                    <div className="COTW-restaurants">
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
            </section>

            <section className="about">
                <div className="content">
                    <h1>ABOUT US :</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In a lacus vel justo fermentum bibendum non eu ipsum.
                        Cras porta malesuada eros, eget blandit turpis suscipit
                        at. Vestibulum sed massa in magna sodales porta. Vivamus
                        elit urna, dignissim a vestibulum. Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit. In a lacus vel justo
                        fermentum bibendum no eu ipsum. Cras porta malesuada
                        eros.
                    </p>
                </div>

                <div className="logo">
                    <img src="" alt="" />
                </div>
            </section>
        </>
    );
};

export default Home;
