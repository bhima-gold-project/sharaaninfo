import React from 'react';
import { Fade } from "react-awesome-reveal";
import Navbar1 from '../Molecules/navbar1';


import Sidenav from '../Molecules/sidenav';

export default function AboutUs() {

 
  return (
    <div className="aboutus">
      <Navbar1/>
      <Sidenav/>
      <div className="about_banner p-12 row">
        <div className="main-line col-xl-12 col-lg-12 col-md-12">
          <Fade delay={200} direction="up"><div className="about_main_head col-xl-11 col-lg-12">Privacy Policy</div></Fade>
        </div>
        <div id="animation" className="about_animation col-xl-6 p-2 col-lg-12 col-md-12 col-sm-12"/>
      </div>
      <div className="prod_body">
        <div className="prod_main_body py-3">In this privacy policy the terms, “WE” or “US” or “OUR” denotes Sharaan Infosystems, Bangalore with their administrative office situated at #423, 2nd Floor, 8th Main, 4th Block, Koramangala, Bengaluru - 560 034, India.</div>
        <div className="prod_main_body py-3">As a privacy policy, we hereby declare the following:</div>
        <ul className="prod_main_body py-3">
          <li>We respect the privacy & confidentiality of our business clients and application users.</li>
          <li>We never disclose the clients/users personal details to any 3rd party without the explicit permission of the clients/users, nor we use such information beyond the scope of the application.</li>
          <li>We always ensure that any data collected by us for storage, testing or analysis of application is protected with most care and under no circumstances it is intentionally shared with any 3rd party nor it is used beyond the scope of the application.</li>
        </ul>
      

        <div className="prod_main_head2 pt-5">Privacy Policy with respect to client shared information for Application testing and debugging:</div>
        <ul className="prod_main_body py-3">
            <li>We receive only limited information like test data, error logs, screen prints etc from our clients for application testing or for application debugging.</li>
            <li>Such information received is placed in the central development server with SVN as Subversion control with controlled and monitored folder access.  Such received test data is loaded on the development and test database server with controlled access.</li>
            <li>Such information received from clients is accessible only to the assigned developers for program testing or debugging.</li>
            <li>After the task of program development & debugging is complete and after the client user accepts the application or fix, such test data, error logs and screen prints received from clients in our storage are destroyed beyond recovery.</li>
        </ul>
        <div className="prod_main_head2 pt-5">Privacy Policy with respect to information collected through our Mobile Applications:</div>
        <ul className="prod_main_body py-3">
            <li>Our demo applications in Mobile Application stores like Google play store and iOS App Store may selectively collect & transmit to the server the following details. 
                <ol>
                    <li>Contact details of the telephone user.</li>
                    <li>Email Address of the user.</li>
                    <li>Device Id of the Android device and UUID of the iOS devices on which the application is installed.</li>
                    </ol>
            </li>
            <li>We use this device/user information only to assign an unique user identification number for the future data recovery, to load the relevant data and for the future data synchronization purposes only.</li>
            <li>This information is never used beyond the scope of the application which collects these information.
In our mobile applications, we may selectively access the following device resources:
<ol><li>Access the device camera which is used as a QR code scanner or as a document scanner or for Profile photo capture which are specific to such application.</li>
<li>Access the Storage either Internal or SD card or USB to store or alter or remove the our application specific data and images.</li>
<li>access the Network information & access the Network to select the connection mode and to transmit our application specific data to and from the server.</li>
<li>Prevent device sleeping – The data synchronization process between server and the application may take considerable time depending on the volume of data. So the application prevents the device from sleeping during this process to ensure the data sync integrity.</li></ol>
</li>
            <li>All the above permissions are used exclusively within the application scope and for the proper functioning of the application and without any mala fide objective.</li>
        </ul>


        
      </div>
    </div>
  )
}