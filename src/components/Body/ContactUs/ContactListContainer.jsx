import React from "react";
import List from "../List";
import BurgerImage from "../BurgerImage";

function ContactListContainer() {
  return (
    <ul>
      <List
        child={
          <>
            <BurgerImage imagePath={"/assets/images/call.svg"} />
            <p>
              <span>Phone:</span> +220 3626260
            </p>
          </>
        }
      />
      <List
        child={
          <>
            <BurgerImage imagePath={"/assets/images/mail.svg"} />
            <span>Email: </span>
            <a href="mailto:bbabucarr32@gmail.com">bbabucarr32@gmail.com</a>
          </>
        }
      />

      <List
        child={
          <>
            <BurgerImage imagePath={"/assets/images/location.svg"} />
            <p>
              <span>Location:</span>The, Gambia.{" "}
            </p>
          </>
        }
      />
    </ul>
  );
}

export default ContactListContainer;
