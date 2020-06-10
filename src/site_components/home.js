import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../styles.css";

export default function Home() {
  return (
    <div className="home">
      <h3 className="padding_element">Welcome to Battle of Wits!</h3>
      <hr />
      <img
        onClick={() =>
          alert(
            "I know that you want to choose me as a character! Well, I am afraid that I'd be too overpowered for this game!"
          )
        }
        src="Scumbag_Jens.jpg"
        alt="homebackground"
      />
      <Link className="link" to="/characterselection">
        <Button variant="secondary" className="padding_element">
          <h3>Choose your Character and start a Match!</h3>
        </Button>
      </Link>
    </div>
  );
}
