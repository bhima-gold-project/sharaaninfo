import React from 'react';
import "../Assets/CSS/services.css";
import Navbar1 from '../Molecules/navbar1';
import Data from "../Assets/Json/services.json";
import Sidenav from '../Molecules/sidenav';
import Integration from '../Molecules/Services/integration';
import Ecomm from '../Molecules/Services/eComm';
import Mobileapps from '../Molecules/Services/MobileApps';
import OdooDevelopment from '../Molecules/Services/OdooDevelopment';

export default function Services({Service}) {
  var Service_page;
if(Service==="Integration Services"){
  Service_page=<Integration/>
}
else if(Service==="eCommerce"){
  Service_page=<Ecomm/>
}
else if(Service==="Mobile Apps"){
  Service_page=<Mobileapps/>
}
else if (Service === "Odoo Development") {
  Service_page = <OdooDevelopment />;
}



  return (
    <div className="services" id="integration">
      <Navbar1/>
      <Sidenav/>
      {Data.map((items, index)=>{
        var serviceName=items.ServiceName;
        if(serviceName===Service){
          var Data1=Data[index];
          var service_name=Data1.ServiceHeading;
          var banner=Data1.banner;
          var banner2=Data1.banner2;
          return(
            <>
              <img src={banner} className="banner_img" alt="banner"/>
              <img src={banner2} className="banner_img2" alt="banner-mob"/>
              <div className="prod_body">
                <div className="prod_main_head pt-5">{service_name}</div>
              </div>
              {Service_page}
            </>
          );
        }
        return(<></>);
      })}
      
    </div>
  )
}