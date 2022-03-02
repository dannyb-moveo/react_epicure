import React from "react";
import { Card, Navbar, Searchbar } from "../components";
import hero from "../assets/hero-picture.png";
import "./home.scss";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="hero">
        <img src={hero} alt="hero-img" className="hero-img" />
        <div className="hero-search-container">
          <h3>Epicure works with the top chef restaurants in Tel Aviv</h3>
          <Searchbar />
        </div>
      </div>

      <section className="popular-restaurants padding-y">
        <div className="title">
          <h1>THE POPULAR RESTAURANTS IN EPICURE :</h1>
        </div>

        <div className="card-wrap container">
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </>
  );
};

export default Home;
