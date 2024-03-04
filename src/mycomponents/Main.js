import React from "react";
import "./ImageGrid.css";
import image2 from "../images/images (2).jpg";
import image3 from "../images/images (3).jpg";
import image4 from "../images/images (4).jpg";
import Header from "./Header/Header";
import { NavLink } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Header />
      <div className="products">
        <div>
          <NavLink className="nav-link" to="/Home">
            <img src={require("../images/Rectangle 20.png")} alt="" /> Tshirts
          </NavLink>
        </div>

        <div>
          <img src={require("../images/Rectangle 21.png")} alt=""></img> Tshirts
        </div>

        <div>
          <img src={require("../images/Rectangle 22.png")} alt=""></img> Tshirts
        </div>
      </div>
      <div className="products">
        <div>
          <img src={require("../images/Rectangle 23.png")} alt=""></img> Tshirts
        </div>

        <div>
          <img src={require("../images/Rectangle 24.png")} alt=""></img> Tshirts
        </div>

        <div>
          <img src={require("../images/Rectangle 25.png")} alt=""></img> Tshirts
        </div>
      </div>
      <div className="products">
        <div>
          <img src={image2} alt=""></img> Tshirts
        </div>

        <div>
          <img src={image3} alt=""></img> Tshirts
        </div>

        <div>
          <img src={image4} alt=""></img> Tshirts
        </div>
      </div>
    </>
  );
};
export default Main;
