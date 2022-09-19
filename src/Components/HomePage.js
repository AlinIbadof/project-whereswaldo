import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="homepage">
      <h1>Where's Waldo?</h1>
      <p>
        The objective is to find all the characters below in a certain scene.
      </p>
      <p>There may not be all the characters present in a scenery.</p>
      <p>In some cases, the dog may be hidden and only its tail visible. </p>
      <div className="characterimages">
        <div>
          <img src={process.env.PUBLIC_URL + "/waldo.JPG"} alt="Waldo" />
          <p>Waldo</p>
        </div>
        <div>
          <img src={process.env.PUBLIC_URL + "/wilma.JPG"} alt="Wilma" />
          <p>Wilma</p>
        </div>
        <div>
          <img
            src={process.env.PUBLIC_URL + "/whitebeard.JPG"}
            alt="Whitebeard"
          />
          <p>Whitebeard</p>
        </div>
        <div>
          <img src={process.env.PUBLIC_URL + "/woof.JPG"} alt="Woof" />
          <p>Woof</p>
        </div>
      </div>
      <div className="fishingsection">
        <p className="fishingtitle">Fishing Scene</p>
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
