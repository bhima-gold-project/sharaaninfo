import React from "react";
import "../Assets/CSS/footer.css";
import Data from "../Assets/Json/products.json";
import Data1 from "../Assets/Json/services.json";

const address =
  "https://www.google.com/maps/place/Sharaan+Infosystems/@12.934702,77.6229052,17z/data=!3m1!4b1!4m5!3m4!1s0x3bae3d9acee268a3:0x9398e881638528a!8m2!3d12.9346968!4d77.6250939";

export default function Footer() {
  return (
    <div className="footer">
      {/* <div className="footer1 justify-content-between row"> */}
      <div className="footer1 row">

        <div className="col-lg-4 col-sm-12">
          <div className="footer_head">Visit Us</div>
          <div className="footer_body">
            <ul>
              <li>
                <a href={address} target="_blank" rel="noreferrer">
                  
                  No.147/K, 2nd Floor, 12th Main, Jakkasandra, 3rd Block,
                   Koramangala, Bengaluru, Karnataka - 560 034
                </a>
              </li>
              {/* <li>
                Phone: <a href="tel:+918045301011">+91 - 80453 01011</a>
              </li> */}
              <li>
                Mobile:<a href="tel:+919741122536"> +91 - 97411 22536</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-lg-2 col-sm-12">
          <div className="footer_head">Useful Links</div>
          <div className="footer_body">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/AboutUs">About Us</a>
              </li>
              <li>
                <a href="/Contact">Contact Us</a>
              </li>
              <li>
                <a href="/brochures">Brochures</a>
              </li>

              <li>
                <a href="/PrivacyPolicy">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-lg-2 col-sm-12">
          <div className="footer_head">Services</div>
          <div className="footer_body">
            <ul>
              {Data1 &&
                Data1.map((items, index) => {
                  var Servicename = items.ServiceName;
                  var url = items.urlname;
                  return (
                    <>
                      <li>
                        <a href={`/${url}`}>{Servicename}</a>
                      </li>
                    </>
                  );
                })}
            </ul>
          </div>
        </div>

        <div className="col-lg-4 col-sm-12">
          <div className="footer_head">Products</div>
          <div className="footer_body">
            <div className="row">
              <div className="col-sm-5">
                <ul>
                  {Data &&
                    Data.slice(0, 5).map((items, index) => {
                      var Prodname = items.ProdName;
                      return (
                        <>
                          <li>
                            <a href={`/${Prodname}`}>{Prodname}</a>
                          </li>
                        </>
                      );
                    })}
                </ul>
              </div>
              {/* <div className="col-sm-2"></div> */}
              <div className="col-sm-5">
                <ul>
                  {Data &&
                    Data.slice(5, 12).map((items, index) => {
                      var Prodname = items.ProdName;
                      return (
                        <>
                          <li>
                            <a href={`/${Prodname}`}>{Prodname}</a>
                          </li>
                        </>
                      );
                    })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright col-lg-12">
        Copyright © 2024 Sharaan Infosystems. All Rights Reserved
      </div>
    </div>
  );
}
