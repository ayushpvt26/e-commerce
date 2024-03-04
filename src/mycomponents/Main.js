import React from "react";
import './ImageGrid.css';
import image1 from "./images/images (1).jpg";
import image2 from "./images/images (2).jpg";
import image3 from "./images/images (3).jpg";
import image4 from "./images/images (4).jpg";
import image5 from "./images/images (5).jpg";
import {BrowserRouter,Routes,Route } from 'react-router-dom'; // Import Link from react-router-dom
import Header from "./Header";
import {NavLink} from 'react-router-dom';

const Main=()=>{


  return(<>
 <Header/>
    <div className="products">
  
  <div>
  <NavLink className="nav-link" to="/Home">
  <img src={require("./images/Rectangle 20.png")}/> Tshirts
                    </NavLink>
    
  </div>
 
  <div><img src={require("./images/Rectangle 21.png")}></img> Tshirts</div>
  
  <div><img src={require("./images/Rectangle 22.png")}></img> Tshirts</div>
  


    </div>
    <div className="products">
  
    <div><img src={require("./images/Rectangle 23.png")}></img> Tshirts</div>
    
   
    <div><img src={require("./images/Rectangle 24.png")}></img> Tshirts</div>
    
    <div><img src={require("./images/Rectangle 25.png")}></img> Tshirts</div>
    
  
  
      </div>
      <div className="products">
  
      <div>
       

        <img src={image2}></img> Tshirts
        
        </div>
      
     
      <div><img src={image3}></img> Tshirts</div>
      
      <div><img src={image4}></img> Tshirts</div>
      
    
    
        </div>

        </>

  );
};
export default Main;