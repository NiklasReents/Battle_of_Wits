import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";
import { Button, Image } from "react-bootstrap";
import "../styles.css";

const cookies = new Cookies();

export default function Characterselection() {
  const [characters, setCharacters] = useState([]);
  const [characterIndex, setCharacterIndex] = useState(0);
  const [redirect, setRedirect] = useState(false);

  function renderRedirect() {
    if (redirect) {
      return (
        <Redirect
          to={{
            pathname: "/battlescreen",
            state: { selectedCharacter: characters[characterIndex] },
          }}
        />
      );
    }
  }

  useEffect(() => {
    axios
      .get("http://localhost:8000/login/characterselection", {
        headers: { Authorization: cookies.get("Mycookie") },
        //for the time being, localhost serves as a placeholder
      })
      .then(function (response) {
        setCharacters(response.data);
      })
      .catch(function (error) {
        console.log(error);
        window.location.href = "/login";
      });
  }, []);
  if (characters.length) {
    return (
      <div className="characterselection">
        <h3 className="padding_element">Choose your Character!</h3>
        <p>
          Switch between Characters by clicking on the Arrows and start a Battle
          against the Computer by clicking on the Character Portrait!
        </p>
        <hr />
        <h4>{characters[characterIndex].name}</h4>
        <p>{characters[characterIndex].description}</p>
        <div className="imagecontainer">
          <Button
            variant="light"
            onClick={() => {
              let indexOfCharacterLeft = characterIndex;
              if (indexOfCharacterLeft > 0)
                setCharacterIndex(indexOfCharacterLeft - 1);
              else
                setCharacterIndex(
                  (indexOfCharacterLeft = characters.length - 1)
                );
            }}
          >
            <Image
              className="selectionarrows"
              src="arrow_left.bmp"
              alt="arrow_left"
              roundedCircle
            />
          </Button>
          <Button
            variant="dark"
            onClick={() => {
              setRedirect(true);
            }}
          >
            <img
              className="characterimage"
              src={characters[characterIndex].image}
              alt="character"
            />
          </Button>
          <Button
            variant="light"
            onClick={() => {
              let indexOfCharacterRight = characterIndex;
              if (indexOfCharacterRight < characters.length - 1)
                setCharacterIndex(indexOfCharacterRight + 1);
              else setCharacterIndex((indexOfCharacterRight = 0));
            }}
          >
            <Image
              className="selectionarrows"
              src="arrow_right.bmp"
              alt="arrow_right"
              roundedCircle
            />
          </Button>
          <div>{renderRedirect()}</div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}
