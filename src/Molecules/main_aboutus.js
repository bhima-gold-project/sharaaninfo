import React from 'react';
import "../Assets/CSS/main_aboutus.css"
import { Fade } from "react-awesome-reveal";

export default function Mainabout() {
  return (
    <div className="main_about" id="home">
      <Fade delay={200} direction="up">
        <div className="main_head">A Little About Us</div>
      </Fade>
      <Fade delay={200} direction="up">
        <div className="main_body my-3">Headquartered in Bangalore, Sharaan Infosystems is a leading provider of Jewellery Management Software. We are specialised in developing Application Software with new age technology and tools. Our core competencies are process consulting and Software Development. Our team of professionals has good exposure and understanding of various business processes related to different industry verticals. We have developed and deployed powerful End-to-End software applications for Manufacturing, Retailing, Pharma industries are to name a few.</div>
      </Fade>
    </div>
  );
}