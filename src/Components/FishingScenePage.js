import React, { useState } from "react";
import "./FishingScenePage.css";

function FishingScenePage() {
  // the values for coordX were found by dividing the coordinate X where a character is found, and the total width of the image container
  const characters = [
    { name: "Waldo", coordX: 0.475, coordY: 0.31 },
    { name: "Wilma", coordX: 0.224, coordY: 0.422 },
    { name: "Whitebeard", coordX: 0.69, coordY: 0.263 },
    { name: "Woof", coordX: 0.96, coordY: 0.493 },
  ];

  const [coordX, setCoordX] = useState(0);
  const [coordY, setCoordY] = useState(0);
  const [clientH, setClientH] = useState(0);
  const [clientW, setClientW] = useState(0);

  const clickCharacter = (event) => {
    // goes through the character array and returns the object that has the name of the clicked character
    let character = characters.filter(
      (item) => item.name === event.target.textContent
    )[0];

    // gets the value of the character X (and Y) and rounds it to 2 decimals
    let charRoundedX = Math.round(character.coordX * 100) / 100;
    let charRoundedY = Math.round(character.coordY * 100) / 100;

    // calculates the X and Y of the click, rounds it to 2 decimals
    let calcX = Math.round((coordX / clientW) * 100) / 100;
    let calcY = Math.round((coordY / clientH) * 100) / 100;

    // checks if the click is almost in the right spot (small error is ok)
    console.log(
      charRoundedX - 0.015 < calcX &&
        calcX < charRoundedX + 0.015 &&
        charRoundedY - 0.015 < calcY &&
        calcY < charRoundedY + 0.015
    );

    // console.log("x: " + coordX + " y: " + coordY);
    // console.log("client height: " + clientH + " client width: " + clientW);
    // console.log(Math.round(character.coordX * 100) / 100);
    // console.log(Math.round((coordX / clientW) * 100) / 100);

    // console.log(
    //   Math.round(character.coordX * 100) / 100 ===
    //     Math.round((coordX / clientW) * 100) / 100 &&
    //     Math.round(character.coordY * 100) / 100 ===
    //       Math.round((coordY / clientH) * 100) / 100
    // );
  };

  const modalOnClick = (event) => {
    // get the X, Y of the click based on the image container size and update the state
    setCoordX(event.clientX);
    setCoordY(event.clientY);

    // get the height and width of the img container box and update the state
    setClientH(event.target.clientHeight);
    setClientW(event.target.clientWidth);

    // target the "modal" div, which is a sibling to img
    let target = event.target.parentNode.getElementsByClassName("modal")[0];

    target.classList.toggle("show");

    //gets the cursor position, and then applies a styling to the "modal" based on it
    let mousePosX = event.clientX;
    let mousePosY = event.clientY;
    document.querySelector(".modal").style.left = mousePosX + 50 + "px";
    document.querySelector(".modal").style.top = mousePosY - 25 + "px";
  };

  return (
    <div className="imgbox">
      <img
        src={process.env.PUBLIC_URL + "/fishingscene.jpeg"}
        alt="Fishing scene"
        className="center-fit"
        onClick={modalOnClick}
      />
      <div className="circularmodal"></div>
      <div className="modal">
        <div onClick={clickCharacter}>Waldo</div>
        <div onClick={clickCharacter}>Wilma</div>
        <div onClick={clickCharacter}>Whitebeard</div>
        <div onClick={clickCharacter}>Woof</div>
      </div>
    </div>
  );
}

export default FishingScenePage;
