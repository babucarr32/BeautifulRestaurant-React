import React from "react";
import List from "../List";
import BurgerImage from "../BurgerImage";
import Paragraph from "./Paragraph";

function ContactListContainer() {
  return (
    <ul>
      <List
        child={
          <>
            <BurgerImage imagePath={"/assets/images/call.svg"} />
            <Paragraph>
              <span>Phone:</span> +220 3626260
            </Paragraph>
          </>
        }
      />
      <List
        child={
          <>
            <BurgerImage imagePath={"/assets/images/mail.svg"} />
            <Paragraph>
              <span>Email: </span>
              <a href="mailto:bbabucarr32@gmail.com">bbabucarr32@gmail.com</a>
            </Paragraph>
          </>
        }
      />

      <List
        child={
          <>
            <BurgerImage imagePath={"/assets/images/location.svg"} />
            <Paragraph>
              <span>Location:</span>The, Gambia.{" "}
            </Paragraph>
          </>
        }
      />
    </ul>
  );
}

export default ContactListContainer;
