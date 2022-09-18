import React from "react";
import "./FishingScenePage.css";

function FishingScenePage() {
  // the values for coordX were found by dividing the coordinate X where a character is found, and the total width of the image container
  const characters = [
    { name: "Waldo", coordX: 0.475, coordY: 0.31 },
    { name: "Wilma", coordX: 0.224, coordY: 0.422 },
    { name: "Whitebeard", coordX: 0.69, coordY: 0.263 },
    { name: "Woof", coordX: 0.96, coordY: 0.493 },
  ];

  const clickWaldo = (event) => {
    // get the X, Y of the click, based on the image container size
    let getX = event.clientX;
    let getY = event.clientY;

    // get the height and width of the img container box
    let getClientHeight = event.target.clientHeight;
    let getClientWidth = event.target.clientWidth;

    // gets the waldo character object
    let character = characters.filter((item) => item.name === "Waldo")[0];

    console.log(
      Math.round(character.coordX * 100) / 100 ===
        Math.round((getX / getClientWidth) * 100) / 100 &&
        Math.round(character.coordY * 100) / 100 ===
          Math.round((getY / getClientHeight) * 100) / 100
    );
  };

  return (
    <div className="imgbox">
      <img
        src={process.env.PUBLIC_URL + "/fishingscene.jpeg"}
        alt="Fishing scene"
        className="center-fit"
        onClick={clickWaldo}
      />
    </div>
  );
}

export default FishingScenePage;
