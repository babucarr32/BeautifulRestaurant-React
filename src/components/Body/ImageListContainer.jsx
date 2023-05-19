import React, { useContext } from "react";
import List from "./List";
import BurgerImage from "./BurgerImage";
import { BurgerTypeContext } from "./WelcomeContainer";

function ImageListContainer() {
  const { image, bbqBurger, carolina, friedChickenBurger, changeImage } =
    useContext(BurgerTypeContext);

  return (
    <div className="burgerTypes">
      <ul>
        <List
          onClickFunc={() => changeImage(image)}
          child={<BurgerImage imagePath={image} imgName={"image"} />}
        />
        <List
          onClickFunc={() => changeImage(bbqBurger)}
          child={<BurgerImage imagePath={bbqBurger} imgName={"NewBurger"} />}
        />
        <List
          onClickFunc={() => changeImage(carolina)}
          child={<BurgerImage imagePath={carolina} imgName={"carolina"} />}
        />
        <List
          onClickFunc={() => changeImage(friedChickenBurger)}
          child={
            <BurgerImage
              imagePath={friedChickenBurger}
              imgName={"friedChickenBurger"}
            />
          }
        />
      </ul>
    </div>
  );
}

export default ImageListContainer;
