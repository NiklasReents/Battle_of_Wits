import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";
import styles from "../styles.css";

const cookies = new Cookies();

export default function Characterselection() {
  const [characters, setCharacters] = useState([]);
  let [characterIndex, setCharacterIndex] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:8000/login/characterselection", {
        headers: { Authorization: cookies.get("Mycookie") },
      })
      .then(function (response) {
        console.log(response);
        setCharacters(response.data);
      })
      .catch(function (error) {
        window.location.href = "/login";
      });
  }, []);
  if (characters.length) {
    return (
      <div className="characterselection">
        <h3>Choose your Character!</h3>
        <p>
          Switch between Characters by clicking on the Arrows and start a Battle
          against the Computer by clicking on the Character Portrait!
        </p>
        <hr />
        <h4>{characters[characterIndex].name}</h4>
        <p>{characters[characterIndex].description}</p>
        <div className="imagecontainer">
          <button>
            <img
              onClick={() => {
                let indexOfCharacterLeft = characterIndex;
                if (indexOfCharacterLeft > 0)
                  setCharacterIndex(indexOfCharacterLeft - 1);
                else
                  setCharacterIndex(
                    (indexOfCharacterLeft = characters.length - 1)
                  );
                console.log(indexOfCharacterLeft);
                console.log(characters[characterIndex]);
              }}
              className="selectionarrows"
              src="arrow_left.bmp"
              alt="arrow_left"
            />
          </button>
          <button>
            <Link className="link" to="/battlescreen">
              <img
                className="characterimage"
                src={characters[characterIndex].image}
                alt="character"
              />
            </Link>
          </button>
          <button>
            <img
              onClick={() => {
                let indexOfCharacterRight = characterIndex;
                if (indexOfCharacterRight < characters.length - 1)
                  setCharacterIndex(indexOfCharacterRight + 1);
                else setCharacterIndex((indexOfCharacterRight = 0));
                console.log(indexOfCharacterRight);
                console.log(characters[characterIndex]);
              }}
              className="selectionarrows"
              src="arrow_right.bmp"
              alt="arrow_right"
            />
          </button>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}
