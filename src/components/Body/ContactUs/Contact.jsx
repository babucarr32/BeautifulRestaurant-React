import React from "react";
import "../../../assets/css/Contact.css";
import ContactListContainer from "./ContactListContainer";

function Contact() {
  return (
    <div className="contactContainer">
      <div className="infoDiv">
        <ContactListContainer />
      </div>
      <div className="imgDiv">
        <div className="formDiv">
          <p>Get In Touch With Us</p>
          <form action="">
            <input type="text" placeholder="First name" /> <br />
            <input type="text" placeholder="Last name" /> <br />
            <input type="text" placeholder="Your email" /> <br />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Your message..."
            ></textarea>
            <a href="" type="submit">
              Submit
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
