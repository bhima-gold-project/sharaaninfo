import React from 'react';
import "./../Assets/CSS/mainpage.css";
import Mainabout from "../Molecules/main_aboutus";
import Mainbanner from "./../Molecules/main_banner.js";
import Mainprod from '../Molecules/main_products.js';
import Services from '../Molecules/main_services.js';
import Clients from '../Molecules/main_clients';
import Navbar from '../Molecules/navbar';
import Sidenav from '../Molecules/sidenav';

const x=window.screen.height/3;

export default function Mainpage() {
  window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 2*x || document.documentElement.scrollTop > 2*x) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("dropdown").style.display="";
    document.getElementById("dropdown1").style.display="";
  } else {
    document.getElementById("navbar").style.top = "-80px";
    document.getElementById("dropdown").style.display="none";
    document.getElementById("dropdown1").style.display="none";
  }
}
  return (
    <div className="mainpage">
      <Navbar/>
      <Sidenav/>
      <Mainbanner/>
      <Mainabout/>
      <Mainprod/>
      <Services/>
      <Clients/>
    </div>
  );
}