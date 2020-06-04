import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import styles from "../styles.css";

const cookies = new Cookies();

export default function Characterselection() {
  const [characters, setCharacters] = useState([]);
  const [characterIndex, setCharacterIndex] = useState(0);

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
        <h4>{characters[characterIndex].name}</h4>
        <h4>{characters[characterIndex].description}</h4>
        <div className="imagecontainer">
          <button>
            <img
              className="characterimage"
              src="arrow_left.bmp"
              alt="arrow_left"
            />
          </button>
          <button>
            <img
              className="characterimage"
              src={characters[characterIndex].image}
              alt="monopoly_man"
            />
          </button>
          <button>
            <img
              className="characterimage"
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
