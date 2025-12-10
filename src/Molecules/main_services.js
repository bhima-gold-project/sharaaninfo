import React from 'react';
import "../Assets/CSS/main_service.css";
import { Fade,Zoom} from "react-awesome-reveal";

import Data from "../Assets/Json/services.json"

export default function Mainservices() {
  
  return (
    <div className="main_services">
      <Fade delay={200} direction="up">
        <div className="main_head1">Our Services</div>
      </Fade>
      <Zoom delay={200}>
        <div className="row justify-content-around py-3">
          {Data && Data.map((item, index)=>{
              var image=item.Home_image;
              var name=item.ServiceName;
              var desc=item.Home_desc;
              var urlname=item.urlname;
              function service_page(){
                window.location.href = `/${urlname}`;
              }
            return(
              <div className="row justify-content-center service-card col-xl-4 col-lg-6 col-md-6" onClick={service_page}>
                <div className="service-imgcont">
                  <img src={image} alt="web" className="service-img"/>
                  <span className="service-desc  main_body_sm px-2">{desc}</span>
                </div>
                <div className="main_subhead pt-4 mb-5">{name}</div>
              </div>
            );
          })}
        </div>
      </Zoom>
    </div>
  );
}