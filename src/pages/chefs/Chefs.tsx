import React from "react";
import "./chefs.scss";
import AnimatedPage from "../AnimatedPage";
import { Autocomplete } from "../../components/UI";

const Chefs = () => {
  return (
    <AnimatedPage>
      <div className="chefs">
        Chefs
        <Autocomplete />
      </div>
    </AnimatedPage>
  );
};

export default Chefs;
