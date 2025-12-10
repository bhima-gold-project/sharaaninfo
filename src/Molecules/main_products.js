import React from 'react';
import App1 from "../Atoms/card/App"
import "../Assets/CSS/main_prod.css"
import { Fade, Slide } from "react-awesome-reveal";

export default function Mainprod() {
 
  return (
    <div className="main_prod">
      <Fade delay={200} direction="up">
        <div className="main_head1">Our Products</div>
      </Fade>
      <Slide delay={200} direction="right">
        <App1/>
      </Slide>
    </div>
  );
}