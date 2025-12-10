import React from 'react';
import lottie from "lottie-web";
import animationData from '../../Assets/lottie-json/contact.json';
import Valid from "../Validations/form-validations";

export default function Form() {
  
  React.useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#animation"),
      animationData: animationData,
    });
  }, []);

  return (
    <div className="form row">
      <div className="form-field-section col-lg-6">
        <div className="form-head">Contact Us</div>
        <form id="contact-form" className="contact-form" action="contactmail.php" method="post">
          <input type="text" name="name" placeholder="User Name" className="form-control input-focus-none mt-4" onChange={Valid.Username} id="InputName" pattern="[A-Z\sa-z]{4,20}" title="Username should only contain 4-20 letters." required/>
          <p id="name"></p>
          <input type="text" name="number" placeholder="Mobile Number" className="form-control mt-4" id="InputMob" onChange={Valid.Mobile} pattern="[0-9]*" title="Mobile number should always be only numbers. "  required/>
          <p id="phno"></p>
          <input type="email" name="email" placeholder="Mail ID" className="form-control mt-4" id="InputEmail" onChange={Valid.Email} required/>
          <p id="email"></p>
          <input type="text" name="usersubject" placeholder="Subject" className="form-control mt-4" id="InputSubject" />
          <textarea id="InputMessage" className="form-control mt-4" name="usermessage" rows="4" placeholder="Message"/>
          <button type="submit" className="btn btn-warning mb-3 mt-4 px-4" name="submit" onClick={Valid.success}>Submit</button>
        </form>
      </div>
      <div className="col-lg-6 p-5 form-animation" id="animation"></div>
    </div>
  );
}