import React from 'react';
import "../Assets/CSS/mainbanner.css"
import lottie from "lottie-web";
import logo from "../Assets/images/logo1.png"
import animationData from '../Assets/lottie-json/interface2.json';
import { Fade } from "react-awesome-reveal";

export default function Mainbanner() {
  React.useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#animation"),
      animationData: animationData,
    });
  }, []);

  function scroll(){
    document.getElementById("scroll").scrollIntoView();
  }
  return (
    <div className="main_banner p-5 row">
      <div className="main-line col-xl-6 col-lg-6 col-md-6 col-sm-12">
        <img src={logo} alt="logo" className=" col-xl-10 col-lg-8 col-md-8 col-sm-8"/>
        {/* <Fade delay={200} direction="up"><div className="main-head col-xl-11 col-lg-8">Welcome to Sharaan Infosystems</div></Fade> */}
        <Fade delay={600} direction="up"><div id="banner" className="main-head-2 col-xl-10 col-lg-8">We help you to go Digital</div></Fade>
      </div>
      <div id="animation" className="animation col-xl-5 p-0 col-lg-6 col-md-6"/>
      <div className="scroll col-xl-12 text-center align-self-end" onClick={scroll} id="scroll">Scroll Down  <i class="bi bi-mouse"></i></div>
    </div>
  );
}