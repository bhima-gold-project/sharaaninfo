import React from 'react';
import "../Assets/CSS/contact.css"
import Navbar1 from '../Molecules/navbar1';
import Map from '../Atoms/ContactPage/map';
import Cards from '../Atoms/ContactPage/cards';
import Form from '../Atoms/ContactPage/form';
import Sidenav from '../Molecules/sidenav';

export default function Contact() {
  
  return (
    <div className="contact_main">
      <Navbar1/>
      <Sidenav/>
      <div className="contact">
        <h1 className="main_head_contact">Reach us at</h1>
        <Map/>
        <div className="my-5 contact-cards row">
          <Cards/>
        </div>
        <Form/>
      </div>
    </div>
  );
}