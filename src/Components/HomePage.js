import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>Where's Waldo?</h1>
      <p>
        The objective is to find all the characters below in a certain scene.
      </p>
      <img src={process.env.PUBLIC_URL + "/waldo.JPG"} alt="Waldo" />
      <img src={process.env.PUBLIC_URL + "/wilma.JPG"} alt="Wilma" />
      <img src={process.env.PUBLIC_URL + "/whitebeard.JPG"} alt="Whitebeard" />
      <img src={process.env.PUBLIC_URL + "/woof.JPG"} alt="Woof" />
      <div>
        <p>Fishing Scene</p>
        <Link to={"/FishingScene"}>
          <img
            src={process.env.PUBLIC_URL + "/fishingscene.jpeg"}
            alt="Fishing scene"
            height={300}
            width={300}
          />
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
