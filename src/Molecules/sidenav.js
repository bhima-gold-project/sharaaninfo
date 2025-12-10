import React from 'react';
import "../Assets/CSS/navbar.css";
import Data from "../Assets/Json/products.json";
import Data1 from "../Assets/Json/services.json";

export default function Sidenav() {
  function openNav() {
    document.getElementById("sidenav-menu").style.width = "100%";
  }

  function closeNav() {
    document.getElementById("sidenav-menu").style.width = "0";
  }

  function toggle_drp(){
    var dropdown=document.getElementById("side-dropdown");
    var dropdown1=document.getElementById("side-dropdown1");
    if (dropdown.style.display === "flex")
    {
      dropdown.style.display = "none"
    }
    else
    dropdown.style.display = "flex"
    dropdown1.style.display = "none"
  }
  function toggle_drp1(){
    var dropdown1=document.getElementById("side-dropdown1");
    var dropdown=document.getElementById("side-dropdown");
    if (dropdown1.style.display === "flex")
    {
      dropdown1.style.display = "none"
    }
    else
    dropdown1.style.display = "flex"
    dropdown.style.display = "none"
  }


  return (
    <div className="sidenav">
      <div className="sidenav-button" onClick={openNav}>
        <i class="bi bi-caret-right-fill sidenav-open"></i>
      </div>
      <div className="sidenav-menu" id="sidenav-menu">
        <div><i className="bi bi-x-circle-fill sidenav-close" onClick={closeNav}></i></div>
        <div className="sidenav-links justify-content-between">
          <a href="/">Home</a>
          <a href="/Aboutus">About us</a>
          <a href="#Services" onClick={toggle_drp}>Services</a>
          <div className="side-dropdown" id="side-dropdown">
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
          <a href="#Products" onClick={toggle_drp1}>Products</a>
          <div className="side-dropdown" id="side-dropdown1">
            {Data && Data.map((items, index)=>{
              var Prodname=items.ProdName;
              return(
                <>
                  <a href={`/${Prodname}`}>{Prodname}</a>
                </>
              );
            })}
          </div>
          <a href="/Contact">Contact</a>
        </div>
      </div>
    </div>
  );
}