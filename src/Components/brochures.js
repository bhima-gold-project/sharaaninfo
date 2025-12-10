import React from 'react';
import "../Assets/CSS/aboutus.css"
import Navbar1 from '../Molecules/navbar1';
import Sidenav from '../Molecules/sidenav';
import animationData from '../Assets/lottie-json/about.json';
import lottie from "lottie-web";
export default function Brochures() {
     function productBrochure() {
        window.open('https://sharaaninfo.com/Brochures2023/Product Brochure.pdf', '_blank').focus();
      }
      function bvbrochure() {
        window.open('https://sharaaninfo.com/Brochures2023/Magna Vrudhi Brochure.pdf', '_blank').focus();
      }
      function MagentaBrochure() {
        window.open('https://sharaaninfo.com/Brochures2023/Magenta Brochure.pdf', '_blank').focus();
      }
      function DigicatBrochure() {
        window.open('https://sharaaninfo.com/Brochures2023/Digicat Brochure.pdf', '_blank').focus();
      }
      function MiscBrochure() {
        window.open('https://sharaaninfo.com/Brochures2023/Misc.pdf', '_blank').focus();
      }
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
          <div className="my-5 contact-cards row">
          <div className="row">
          <div className="col-lg-4">
        <div className="contact-box">
        <div className="contact-circle">
            <i class="bi bi-file-earmark-pdf contact-circle-logo"></i>
          </div>
         <div className="contact-headtext">Product Brochure</div>
          <div className="contact-bodytext pt-3"><p></p>
          <button type="button" class="btn btn-primary prod_button mt-3" onClick={productBrochure}>Download Brochure</button>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="contact-box">
        <div className="contact-circle">
            <i class="bi bi-file-earmark-pdf contact-circle-logo"></i>
          </div>
         <div className="contact-headtext"> Magna Vrudhi Brochure</div>
          <div className="contact-bodytext pt-3"><p>Point of sale Application.</p>
          <button type="button" class="btn btn-primary prod_button mt-3" onClick={bvbrochure}>Download Brochure</button>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="contact-box">
        <div className="contact-circle">
            <i class="bi bi-file-earmark-pdf contact-circle-logo"></i>
          </div>
         <div className="contact-headtext"> Magenta Brochure</div>
          <div className="contact-bodytext pt-3"><p>An application for Jewellery wholesaler.</p>
          <button type="button" class="btn btn-primary prod_button mt-3" onClick={MagentaBrochure}>Download Brochure</button>
          </div>
        </div>
      </div>
      </div>
      <div class="row">
      <div className="col-lg-4">
        <div className="contact-box">
        <div className="contact-circle">
            <i class="bi bi-file-earmark-pdf contact-circle-logo"></i>
          </div>
         <div className="contact-headtext">Digicat Brochure</div>
          <div className="contact-bodytext pt-3"><p>Mobile application for product cataloguing.</p>
          <button type="button" class="btn btn-primary prod_button mt-3" onClick={DigicatBrochure}>Download Brochure</button>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="contact-box">
        <div className="contact-circle">
            <i class="bi bi-file-earmark-pdf contact-circle-logo"></i>
          </div>
         <div className="contact-headtext">Misc</div>
          <div className="contact-bodytext pt-3">
          <button type="button" class="btn btn-primary prod_button mt-3" onClick={MiscBrochure}>Download Brochure</button>
          </div>
        </div>
      </div>
      </div>
      <br></br>
          </div>
          </div>
          )
}