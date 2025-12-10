import React from 'react';
import "../Assets/CSS/navbar.css"
import logo from "../Assets/images/logo.png"
import Data from "../Assets/Json/products.json"
import Data1 from "../Assets/Json/services.json"

export default function Navbar1() {
    function click (){ 
        window.location.href = `/`;
       };
  return (
    <div className="navbar1 justify-content-between" id="navbar">
      <img src={logo} alt="logo" onClick={click} className="nav-img1 ml-5"/>
      <div className="navlinks">
        <a href="/">Home</a>
        <a href="/AboutUs">About</a>
        <a href="#Services" className="dropdown">
          <div className="dropbtn">Services</div>
          <div class="dropdown-content mt-3">
            {Data1 && Data1.map((items, index)=>{
              var Servicename=items.ServiceName;
              var url=items.urlname;
              return(
                <>
                  <a href={`/${url}`}>{Servicename}</a>
                </>
              );
            })}
          </div>
        </a>
        <a href="#Products" className="dropdown">
          <div className="dropbtn">Products</div>
          <div class="dropdown-content mt-3">
            {Data && Data.map((items, index)=>{
              var Prodname=items.ProdName;
              return(
                <>
                  <a href={`/${Prodname}`}>{Prodname}</a>
                </>
              );
            })}
          </div>
        </a>
        <a href="/contact">Contact</a>
      </div>
    </div>
  );
}