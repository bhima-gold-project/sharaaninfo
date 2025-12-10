import React from 'react';
import "../Assets/CSS/aboutus.css"
import lottie from "lottie-web";
import animationData from '../Assets/lottie-json/about.json';
import { Fade } from "react-awesome-reveal";
import Navbar1 from '../Molecules/navbar1';

import img1 from "../Assets/images/About-images/1.png";
import img2 from "../Assets/images/About-images/2.png";
import img3 from "../Assets/images/About-images/3.png";
import img4 from "../Assets/images/About-images/4.png";
import img5 from "../Assets/images/About-images/5.png";
import img6 from "../Assets/images/About-images/6.png";
import Sidenav from '../Molecules/sidenav';

export default function AboutUs() {

  React.useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#animation"),
      animationData: animationData,
    });
  }, []);
  return (
    <div className="aboutus">
      <Navbar1/>
      <Sidenav/>
      <div className="about_banner p-5 row">
        <div className="main-line col-xl-6 col-lg-12 col-md-12">
          <Fade delay={200} direction="up"><div className="about_main_head col-xl-11 col-lg-12">About Us</div></Fade>
        </div>
        <div id="animation" className="about_animation col-xl-6 p-2 col-lg-12 col-md-12 col-sm-12"/>
      </div>
      <div className="prod_body">
        <div className="prod_main_head pt-5">Sharaan Infosystems Process Based Solutions</div>
        <div className="prod_main_body py-3">Headquartered in Bangalore, Sharaan Infosystems is a leading provider of Jewellery Management Software. We are specialised in developing Application Software with new age technology and tools.</div>
        <div className="prod_main_body py-3">Our core competencies are process consulting and Software Development. Our team of professionals has good exposure and understanding of various business processes related to different industry verticals. We have developed and deployed powerful End-to-End software applications for Manufacturing, Retailing, Pharma industries are to name a few. Jewelry Software domain is our special expertise.</div>
        <ul className="prod_main_body py-3">
          <li>As a people centric organization, we strive to achieve high customer and employee satisfaction.</li>
          <li>Our expertise in technology is complemented by the deep understanding of the businesses we cater to.</li>
          <li>We have been continuously innovating on various process improvements and enhancements. We try to bring the industry best practices into our solutions.</li>
        </ul>
      

        <div className="prod_main_head2 pt-5">Our Technology Stack</div>
        <div className="prod_main_body py-3">Sharaan Infosystems is mainly into application software development and IT services. We work on multiple platforms like Windows, Android, OpenSource etc., with the following technology stack: .Net programming languages like C#.net, VB.net and ASP.net. We have expertise in C, C++, Visual C++ MFC, Java, PHP, Ruby on Rails and various database technologies like Microsoft SQL Server, MySQL, FoxPro, Postgres SQL, Oracle etc. We have developed Rapid Application Development Frameworks on .net platform for both Windows and Web development using which we can quickly develop and customize software applications to meet the customers’ requirements. Our real strength is in working with various databases technologies. We serve our customers by delivering best quality solutions in time to meet all their business requirements at appropriate cost, which will help them to enhance their productivity and add strategic value to their business. We are associated with expert consultants in Business intelligence, Process consulting and CRM. We are closely working with leading industries to deliver software solutions for their business.</div>


        <div className="py-3 about_foot_images">
          <img src={img1} alt="Tech-slack" className="p-2"/>
          <img src={img2} alt="Tech-slack" className="p-2"/>
          <img src={img3} alt="Tech-slack" className="p-2"/>
          <img src={img4} alt="Tech-slack" className="p-2"/>
          <img src={img5} alt="Tech-slack" className="p-2"/>
          <img src={img6} alt="Tech-slack" className="p-2"/>
        </div>
      </div>
    </div>
  )
}