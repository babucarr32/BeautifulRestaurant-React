import React from "react";
import "../../../assets/css/Contact.css"

function Contact() {
  return (
    <div className="contactContainer">
      <div className="infoDiv">
        <ul>
          <li><img src="assets\images\call.svg" alt="" /><p><span>Phone:</span> +220 3626260</p></li>
          <li><img src="assets\images\mail.svg" alt="" /><span>Email: </span><a href="mailto:bbabucarr32@gmail.com">bbabucarr32@gmail.com</a></li>
          <li><img src="assets\images\location.svg" alt="" /><p><span>Location:</span>The, Gambia. </p></li>
        </ul>
      </div>
      <div className="imgDiv">
        <img src="assets\images\undraw_personal_text_re_vqj3.svg" alt="" srcset="" />
        <div className="formDiv">
          <p>Get In Touch With Us</p>
          <form action="">
            <input type="text" placeholder="First name"/> <br />
            <input type="text" placeholder="Last name"/> <br />
            <input type="text" placeholder="Your email"/> <br />
            <textarea name="" id="" cols="30" rows="10" placeholder="Your message..."></textarea>
            <a href="" type="submit">Submit</a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;