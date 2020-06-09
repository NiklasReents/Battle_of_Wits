import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";
import styles from "../styles.css";

const cookies = new Cookies();

export default function Battlescreen() {
  const [characters, setCharacters] = useState([]);
  const [characterIndex, setCharacterIndex] = useState(0);
  let location = useLocation();
  let { playerCharacter } = location.state;

  useEffect(() => {
    axios
      .get("http://localhost:8000/login/characterselection", {
        headers: { Authorization: cookies.get("Mycookie") },
      })
      .then((response) => {
        //console.log(response);
        setCharacters(response.data);
      })
      .catch((error) => {
        window.location.href = "/login";
      });
  }, []);
  if (characters.length) {
    return (
      <div className="battlebackground">
        <div id="characterone_container">
          <img
            className="characterimage"
            src={
              characters[Math.floor(Math.random() * characters.length)].image
            }
            alt="character"
          />
          <div>
            <table className="stats_container">
              <tbody>
                <tr>
                  <td>
                    <h2>
                      HP:{" "}
                      {
                        characters[
                          Math.floor(Math.random() * characters.length)
                        ].hit_points
                      }
                    </h2>
                  </td>
                  <td>
                    <h2>
                      AP:{" "}
                      {
                        characters[
                          Math.floor(Math.random() * characters.length)
                        ].action_points
                      }
                    </h2>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div id="charactertwo_container">
          <img
            className="characterimage"
            src={playerCharacter.image}
            alt="character"
          />
          <div>
            <table className="stats_container">
              <tbody>
                <tr>
                  <td>
                    <h2>HP: {playerCharacter.hit_points}</h2>
                  </td>
                  <td>
                    <h2>AP: {playerCharacter.action_points}</h2>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div id="battlemenu_container">
          <table id="battlemenu_table">
            <tbody>
              <tr>
                <td>
                  <button
                  /*onClick={() => {
                      setCharacters(
                        (characters[0].hit_points =
                          characters[0].hit_points - 150),
                        setCharacters(
                          (characters[0].action_points =
                            characters[0].action_points - 2)
                        )
                      );
                      //console.log(characters[0].hit_points);
                      //console.log(characters[0].action_points);
                    }}*/
                  >
                    <h2>Attack</h2>
                  </button>
                </td>
                <td>
                  <button
                  /*onClick={() => {
                      setCharacters(
                        (characters[0].hit_points =
                          characters[0].hit_points + 250),
                        setCharacters(
                          (characters[0].action_points =
                            characters[0].action_points - 3)
                        )
                      );
                      //console.log(characters[0].hit_points);
                      //console.log(characters[0].action_points);
                    }}*/
                  >
                    <h2>Heal</h2>
                  </button>
                </td>
                <td>
                  <button>
                    <h2>Special Ability 1</h2>
                  </button>
                </td>
                <td>
                  <button>
                    <h2>Special Ability 2</h2>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}
