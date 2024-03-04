import React from "react";
import "./home.css";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import Imageslider from "../Imageslider";

const Home = () => {
  return (
    <>
      <Header />
      <Imageslider />

      <div className="categories">
        <div>
          <Link to="/Main">
            <img src={require("../../images/categorie1.jpg")} alt="Wedding Store" />
            <br />
            Wedding Store
          </Link>
        </div>
        <div>
          <Link to="/Main">
            <img src={require("../../images/categorie2.jpg")} alt="Wedding Store" />
            <br />
            Wedding Store
          </Link>
        </div>
        <div>
          <Link to="/Main">
            <img src={require("../../images/categorie3.jpg")} alt="Wedding Store" />
            <br />
            Wedding Store
          </Link>
        </div>
        <div>
          <Link to="/main">
            <img src={require("../../images/categorie5.jpg")} alt="Wedding Store" />
            <br />
            Wedding Store
          </Link>
        </div>
        <div>
          <Link to="/main">
            <img src={require("../../images/categorie4.jpg")} alt="Wedding Store" />
            <br />
            Wedding Store
          </Link>
        </div>
      </div>
      <br></br>
      <div className="applink">
        <div className="applink-text">
          <h1> ALLON SOLLY IS NOW AVILABLE ON AN APP!!</h1>
        </div>
        <div className="applink-image">
          <img src={require("../../images/QRimage.png")} alt="off" />
        </div>
        <div className="applink-image">
          <img src={require("../../images/logo-text.png")} alt="off" />
        </div>
      </div>
      <br></br>
      <div className="online-collection-heading">
        <img src={require("../../images/image 3.png")} alt="off" />
        <h1>DISCOVER OUR ONLINE EXCLUSIVE COLLECTION</h1>
        <p>
          ELEATE YOUR STYLE: SHOP THE FRESHEST STYLE FROM OUR ONLINE EXCLUSIVE
          COLLECTION
        </p>
      </div>
      <br></br>
      <div className="online-collection">
        <div className="offers">
          <img src={require("../../images/offer1.png")} alt="off" />
        </div>
        <div className="offers">
          <img src={require("../../images/offer2.png")} alt="off" />
        </div>

        <div className="offers">
          <img src={require("../../images/offer3.png")} alt="off" />
        </div>
        <div className="offers">
          <img src={require("../../images/offer4.png")} alt="off" />
        </div>
      </div>

      <div class="newarrival-grid">
        <div class="newarrival-main-section">
          <h1>New-arrival</h1>
          <br></br>
          <button>MEN</button>
          <button>WOMEN</button>
          <button>KIDS</button>
        </div>
        <div class="newarrival-sub-sections">
          <div class="newarrival-sub-section">
            <img src={require("../../images/item.png")} alt="off" />
            <p>Mens black Textured Formal shirrt</p>
            <p>$ 250.0</p>
          </div>
          <div class="newarrival-sub-section">
            <img src={require("../../images/item.png")} alt="off" />
            <p>Mens black Textured Formal shirrt</p>
            <p>$ 250.0</p>
          </div>
          <div class="newarrival-sub-section">
            <img src={require("../../images/item.png")} alt="off" />
            <p>Mens black Textured Formal shirrt</p>
            <p>$ 250.0</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
