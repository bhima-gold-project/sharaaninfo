import React from 'react';
import "react-awesome-slider/dist/styles.css";
import 'react-awesome-slider/dist/custom-animations/fold-out-animation.css';

import "./../Assets/CSS/products.css";
import Navbar1 from '../Molecules/navbar1';
import Data from "../Assets/Json/products.json";
import Sidenav from '../Molecules/sidenav';

// Slide images: 1600h x 850w
export default function Products({ product }) {
  // Function to open Magna Compact link
  const magnaCompact = () => {
    window.open('https://sharaaninfo.com/Magna_Compact/', '_blank').focus();
  };

  // Find the product data based on the `product` prop
  const productData = Data.find(item => item.ProdName === product);

  // Return null if no product data is found
  if (!productData) return null;

  const { Banner, Banner2, ProdName, Desc, Features, Brochure, Slideshow } = productData;

  // Function to open the brochure
  const brochure = () => {
    window.open(Brochure, '_blank').focus();
  };

  return (
    <div className="products" id="product">
      <Navbar1 />
      <Sidenav />
      <img src={Banner} className="banner_img" alt="banner" />
      <img src={Banner2} className="banner_img2" alt="banner-mob" />
      <div className="prod_body">
        <div className="prod_main_head pt-5">{ProdName}</div>
        <div className="prod_main_body py-3">{Desc}</div>
        {/* Uncomment and use AwesomeSlider if needed */}
        {/* 
        <div className="prod_main_head pt-5">Sneak Peek of our Application</div>
        <AwesomeSlider 
          animation="foldOutAnimation" 
          className="prod_slide my-5" 
          bullets="false" 
          play={true}
          cancelOnInteraction={false}
          interval={6000}
        >
          {Slideshow.map((slide, index) => (
            <div key={index}>
              <img src={slide.img} className="col-lg-12 col-sm-12 col-md-12 prod_slide_img" alt="slide"/>
              <div className="center main_body_sm1">{slide.desc}</div>
            </div>
          ))}
        </AwesomeSlider> 
        */}
        <div className="prod_main_head pt-5">Salient features of {ProdName}:</div>
        <ul className="prod_main_body pt-3">
          {Features && Features.map((feature, index) => (
            <li key={index}>{feature.feature}</li>
          ))}
        </ul>
        {Brochure && (
          <button type="button" className="btn btn-primary mt-3 prod_button" onClick={brochure}>
            Download Brochure
          </button>
        )}
        {ProdName === "Magna" && (
          <button type="button" className="btn btn-primary prod_button mt-3" onClick={magnaCompact}>
            Download Magna Compact
          </button>
        )}
        <div className='mt-5'></div>
      </div>
    </div>
  );
}


// import React from 'react';
// // import AwesomeSlider from "react-awesome-slider";
// import "react-awesome-slider/dist/styles.css";
// import 'react-awesome-slider/dist/custom-animations/fold-out-animation.css';

// import "./../Assets/CSS/products.css";
// import Navbar1 from '../Molecules/navbar1';
// import Data from "../Assets/Json/products.json";
// import Sidenav from '../Molecules/sidenav';
// //slide images 1600-h  850-w
// export default function Products({product}) {
//   function magnaCompact(){
//     window.open('https://sharaaninfo.com/Magna_Compact/', '_blank').focus();
//   }
//   return (
//     <div className="products" id="product">
//       <Navbar1/>
//       <Sidenav/>
//       {Data && Data.map((items, index)=>{
//         var Prodname=items.ProdName;
//         if(Prodname===product){
//           var Data1=Data[index];
//           var banner= Data1.Banner;
//           var banner2= Data1.Banner2;
//           var prod_name=Data1.ProdName;
//           var prod_desc=Data1.Desc;
//           var prod_features=Data1.Features;
//           // var prod_slideshow=Data1.Slideshow;
//           var prod_brouchure=Data1.Brochure;
//           function brochure(){
//             window.open(prod_brouchure, '_blank').focus();
//           }
//           return(
//             <>
//               <img src={banner} className="banner_img" alt="banner"/>
//               <img src={banner2} className="banner_img2" alt="banner-mob"/>
//               <div className="prod_body">
//                 <div className="prod_main_head pt-5">{prod_name}</div>
//                 <div className="prod_main_body py-3">{prod_desc}</div>
//                 {/* <div className="prod_main_head pt-5">Sneak Peek of our Application</div>
//                 <AwesomeSlider animation="foldOutAnimation" className="prod_slide my-5" bullets="false" play={true}
//                   cancelOnInteraction={false}
//                   interval={6000}>
//                   {prod_slideshow.map((slideshow) => (
//                     <div>
//                       <img src={slideshow.img} className="col-lg-12 col-sm-12 col-md-12 prod_slide_img" alt="slide"/>
//                       <div className="center main_body_sm1">{slideshow.desc}</div>
//                     </div>
//                   ))}
//                 </AwesomeSlider> */}
//                 <div className="prod_main_head pt-5">Salient features of {prod_name}:</div>
//                 <ul className="prod_main_body pt-3">
//                   {prod_features && prod_features.map((feature, index)=>{
//                     return(
//                       <li>{feature.feature}</li>
//                     );
//                   })}
//                 </ul>
//                 <button type="button" class="btn btn-primary mt-3 prod_button" onClick={brochure}>Download Brochure</button>
//                 {Data && Data.map((items, index)=>{
//                   var Prodname=items.ProdName;
//                   if(product==="Magna" && Prodname===product){
//                     return(
//                       <button type="button" class="btn btn-primary prod_button mt-3" onClick={magnaCompact}>Download Magna Compact</button>
//                     );
//                   }
//                   return(<></>);
//                 })}
//                 <div className='mt-5'></div>
//               </div>
//             </>
//           );
//         }
//         return(<></>);
//       })}
//     </div>
//   );
// }