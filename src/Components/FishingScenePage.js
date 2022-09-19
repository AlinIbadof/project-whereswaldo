import React, { useState } from "react";
import "./FishingScenePage.css";

function FishingScenePage() {
  // the values for coordX were found by dividing the coordinate X where a character is found, and the total width of the image container
  const characters = [
    { name: "Waldo", coordX: 0.475, coordY: 0.22 },
    { name: "Wilma", coordX: 0.224, coordY: 0.337 },
    { name: "Whitebeard", coordX: 0.69, coordY: 0.176 },
    { name: "Woof", coordX: 0.96, coordY: 0.407 },
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
    if (
      charRoundedX - 0.015 < calcX &&
      calcX < charRoundedX + 0.015 &&
      charRoundedY - 0.015 < calcY &&
      calcY < charRoundedY + 0.015
    ) {
      // if the location is correct, target the correct circle div and toggle a class for it to be shown
      console.log("Correct Location");

      let target = event.target.parentNode.parentNode.getElementsByClassName(
        `${event.target.textContent.toLowerCase()}circle`
      )[0];

      target.classList.add("correct");
      target.style.left = coordX - 30 + "px";
      target.style.top = coordY + 55 + "px";

      window.alert("Correct Location");
    } else {
      console.log("Incorrect Location");
      window.alert("Incorrect Location");
    }
  };

  const modalOnClick = (event) => {
    let rect = event.target.getBoundingClientRect(); // get the bounding box of the img container

    // get the X, Y of the click based on the image container size and update the state
    setCoordX(event.clientX - rect.left);
    setCoordY(event.clientY - rect.top);

    // get the height and width of the img container box and update the state
    setClientH(event.target.clientHeight);
    setClientW(event.target.clientWidth);

    // target the "modal" div, which is a sibling to img
    let target = event.target.parentNode.getElementsByClassName("modal")[0];

    target.classList.toggle("show");

    //gets the cursor position, and then applies a styling to the "modal" based on it
    let mousePosX = event.clientX - rect.left;
    let mousePosY = event.clientY - rect.top;

    if (mousePosX < 800) {
      document.querySelector(".modal").style.left = mousePosX + 50 + "px";
    } else {
      document.querySelector(".modal").style.left = mousePosX - 100 + "px";
    }

    document.querySelector(".modal").style.top = mousePosY + "px";

    // provide a targeting box modal
    let targetCircularModal =
      event.target.parentNode.getElementsByClassName("circularmodal")[0];

    targetCircularModal.classList.toggle("show");
    targetCircularModal.style.left = mousePosX - 30 + "px";
    targetCircularModal.style.top = mousePosY + 55 + "px";
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
      <div className="waldocircle"></div>
      <div className="wilmacircle"></div>
      <div className="whitebeardcircle"></div>
      <div className="woofcircle"></div>
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
