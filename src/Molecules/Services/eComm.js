import React from 'react';
import "../../Assets/CSS/services.css";

import magento from "../../Assets/images/About-images/magento.png";
import opencart from "../../Assets/images/About-images/opencart.png";
import shopify from "../../Assets/images/About-images/shopify.png";
import wordpress from "../../Assets/images/About-images/wordpress.png";

export default function Ecomm() {

  return (
    <div className="prod_body">
      <div className="prod_main_body py-3">The main outcome of changing marketing dynamics in this internet age is the eCommerce. eCommerce industry is growing in a exponential form in the recent years. So, enterprises in B2C line of business have the urgent need to supplement their business with eCommerce.</div>
      <div className="prod_main_body py-3">Sharaan Infosystems has pioneered the eCommerce solution with zero stock eCommerce by integrating the conventional business with the eCommerce business. Sharaan Infosystems provides you to showcase your existing physical stock in the store in the eCommerce web site, there by almost avoiding any exclussive Inventory Carrying Cost for the eCommerce.</div>
      <div className="prod_main_body py-3">Sharaan Infosystems have the skilled team to provide eCommerce solution for varied deployment platforms, be it Microsoft platform or Linux platform depending on the parameters like, your integration platform, scalability requirements, transaction volumes etc.</div>
      <div className="prod_main_head2 py-3">Ecommerce Technology Stack</div>

      <div className="py-3 about_foot_images">
        <img src={magento} alt="magento" className="p-2"/>
        <img src={opencart} alt="opencart" className="p-2"/>
        <img src={shopify} alt="shopify" className="p-2"/>
        <img src={wordpress} alt="wordpress" className="p-2"/>
      </div>
    </div>

    
  )
}