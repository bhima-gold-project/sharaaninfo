import React from 'react';
import "../Assets/CSS/main_clients.css"
import { Fade} from "react-awesome-reveal";

import Bhima from "../Assets/images/Clients/Bhima.png"
import VBJ from "../Assets/images/Clients/VBJ.jpg"
import Tholasi from "../Assets/images/Clients/Tholasi.jpg"
import Dhawan from "../Assets/images/Clients/Dhawan.png"
import AVR from "../Assets/images/Clients/AVR.jpg"
import GRT from "../Assets/images/Clients/GRT.jpg"
import Acharya from "../Assets/images/Clients/Acharya.jpg"
import kavita from "../Assets/images/Clients/kavita.PNG"
import Meralda from "../Assets/images/Clients/Meralda.jpg"
import klas from "../Assets/images/Clients/klas.jpg"
import amy from "../Assets/images/Clients/amy.png"
import dubai from "../Assets/images/Clients/dubai.jpg"
import cjs from "../Assets/images/Clients/cjs.png"
import best from "../Assets/images/Clients/best.jpg"
import Nav from "../Assets/images/Clients/Nav.png"

//images must be in 1:2 ratio

export default function Clients() {
  return (
    <div className="main_clients mb-4">
      <Fade delay={200} direction="up">
        <div className="main_head1">Our Valuable Clients</div>
      </Fade>
      {/* long devices */}
        <div id="carouselExampleControls" class="carousel slide client-lg" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div className="client_logo_cont p-5 justify-content-around">
                <div className="col-3">
                  <img src={Bhima} alt="Bhima" className="client_logo"/>
                </div>
                <div className="col-3">
                  <img src={Tholasi} alt="Tholasi" className="client_logo"/>
                </div>
                <div className="col-3">
                  <img src={VBJ} alt="VBJ" className="client_logo"/>
                </div>
                <div className="col-3">
                  <img src={kavita} alt="kavita" className="client_logo"/>
                </div>
              </div>

              <div className="client_logo_cont p-5 justify-content-around">
                <div className="col-3">
                  <img src={AVR} alt="AVR" className="client_logo"/>
                </div>
                <div className="col-3">
                  <img src={Meralda} alt="Meralda" className="client_logo"/>
                </div>
                <div className="col-3">
                  <img src={GRT} alt="GRT" className="client_logo"/>
                </div>
                <div className="col-3">
                  <img src={klas} alt="KLAS" className="client_logo"/>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div className="client_logo_cont p-5 justify-content-around">
                <div className="col-3">
                  <img src={Acharya} alt="Acharya" className="client_logo"/>
                </div>
                <div className="col-3">
                  <img src={Dhawan} alt="Dhawan" className="client_logo"/>
                </div>
                <div className="col-3">
                  <img src={amy} alt="amy" className="client_logo"/>
                </div>
                <div className="col-3">
                  <img src={Nav} alt="Nav" className="client_logo"/>
                </div>
              </div>


              <div className="client_logo_cont p-5 justify-content-around">
                <div className="col-3">
                  <img src={dubai} alt="dubai" className="client_logo"/>
                </div>
                <div className="col-3">
                  <img src={best} alt="best" className="client_logo"/>
                </div>
                <div className="col-3">
                  <img src={cjs} alt="cjs" className="client_logo"/>
                </div>
              </div>
            </div>
            
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon corousel-icb" aria-hidden="true"></span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon corousel-icf" aria-hidden="true"></span>
          </a>
        </div>
      


      {/* medium devices */}
      <div id="carouselExampleControls-md" class="carousel slide client-md" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div className="client_logo_cont p-3 justify-content-around">
                <div className="col-4">
                  <img src={Bhima} alt="Bhima" className="client_logo"/>
                </div>
                <div className="col-4">
                  <img src={Tholasi} alt="Tholasi" className="client_logo"/>
                </div>
                <div className="col-4">
                  <img src={VBJ} alt="VBJ" className="client_logo"/>
                </div>
              </div>

              <div className="client_logo_cont p-3 justify-content-around">
                <div className="col-4">
                  <img src={kavita} alt="kavita" className="client_logo"/>
                </div>
                <div className="col-4">
                  <img src={AVR} alt="AVR" className="client_logo"/>
                </div>
                <div className="col-4">
                  <img src={Meralda} alt="Meralda" className="client_logo"/>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div className="client_logo_cont p-3 justify-content-around">
                <div className="col-4">
                  <img src={GRT} alt="GRT" className="client_logo"/>
                </div>
                <div className="col-4">
                  <img src={klas} alt="KLAS" className="client_logo"/>
                </div>
                <div className="col-4">
                  <img src={Acharya} alt="Acharya" className="client_logo"/>
                </div>
              </div>


              <div className="client_logo_cont p-3 justify-content-around">
                <div className="col-4">
                  <img src={Dhawan} alt="Dhawan" className="client_logo"/>
                </div>
                <div className="col-4">
                  <img src={amy} alt="amy" className="client_logo"/>
                </div>
                <div className="col-4">
                  <img src={dubai} alt="dubai" className="client_logo"/>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <div className="client_logo_cont p-3 justify-content-around">
                <div className="col-4">
                  <img src={best} alt="best" className="client_logo"/>
                </div>
              </div>


              <div className="client_logo_cont p-3 justify-content-around">
                <div className="col-4">
                  <img src={cjs} alt="cjs" className="client_logo"/>
                </div>
                <div className="col-4">
                  <img src={Nav} alt="Nav" className="client_logo"/>
                </div>
              </div>
            </div>
            
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls-md" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon corousel-icb" aria-hidden="true"></span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls-md" role="button" data-slide="next">
            <span class="carousel-control-next-icon corousel-icf" aria-hidden="true"></span>
          </a>
        </div>



        {/* small devices */}
        <div id="carouselExampleControls-sm" class="carousel slide client-sm" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div className="client_logo_cont p-3 justify-content-around">
                <div className="col-6">
                  <img src={Bhima} alt="Bhima" className="client_logo"/>
                </div>
                <div className="col-6">
                  <img src={Tholasi} alt="Tholasi" className="client_logo"/>
                </div>
              </div>
              <div className="client_logo_cont p-3 justify-content-around">
                <div className="col-6">
                  <img src={VBJ} alt="VBJ" className="client_logo"/>
                </div>
                <div className="col-6">
                  <img src={kavita} alt="kavita" className="client_logo"/>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div className="client_logo_cont p-3 justify-content-around">
                <div className="col-6">
                  <img src={AVR} alt="AVR" className="client_logo"/>
                </div>
                <div className="col-6">
                  <img src={Meralda} alt="Meralda" className="client_logo"/>
                </div>
              </div>
              <div className="client_logo_cont p-3 justify-content-around">
                <div className="col-6">
                  <img src={GRT} alt="GRT" className="client_logo"/>
                </div>
                <div className="col-6">
                  <img src={klas} alt="KLAS" className="client_logo"/>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div className="client_logo_cont p-3 justify-content-around">
                <div className="col-6">
                  <img src={Acharya} alt="Acharya" className="client_logo"/>
                </div>
                <div className="col-6">
                  <img src={Dhawan} alt="Dhawan" className="client_logo"/>
                </div>
              </div>


              <div className="client_logo_cont p-3 justify-content-around">
                <div className="col-6">
                  <img src={amy} alt="amy" className="client_logo"/>
                </div>
                <div className="col-6">
                  <img src={dubai} alt="dubai" className="client_logo"/>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <div className="client_logo_cont p-3 justify-content-around">
                <div className="col-6">
                  <img src={best} alt="best" className="client_logo"/>
                </div>
              </div>


              <div className="client_logo_cont p-3 justify-content-around">
                <div className="col-6">
                  <img src={cjs} alt="cjs" className="client_logo"/>
                </div>
                <div className="col-6">
                  <img src={Nav} alt="Nav" className="client_logo"/>
                </div>
              </div>
            </div>
            
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls-sm" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon corousel-icb" aria-hidden="true"></span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls-sm" role="button" data-slide="next">
            <span class="carousel-control-next-icon corousel-icf" aria-hidden="true"></span>
          </a>
        </div>
    </div>
  );
}