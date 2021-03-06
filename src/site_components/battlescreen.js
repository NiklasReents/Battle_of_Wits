import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";
import { Button, Image } from "react-bootstrap";
import "../styles.css";
import "../animations.css";

const cookies = new Cookies();

export default function Battlescreen() {
  let location = useLocation();
  const [characters, setCharacters] = useState([]);
  const [playerCharacter, setPlayerCharacter] = useState(
    location.state.selectedCharacter
  );
  const [enemyCharacter, setEnemyCharacter] = useState();

  const [counter, setCounter] = useState(1);
  const [aiTurn, setAiTurn] = useState(false);
  const [playerTurn, setPlayerTurn] = useState(true);

  /*the functions defined below are experimental and merely serve the purpose 
  of making it possible for both the player and computer to deal and receive/heal damage*/

  function attackAi() {
    setEnemyCharacter({
      ...enemyCharacter,
      hit_points:
        enemyCharacter.hit_points - enemyCharacter.abilities[0].damage_hp,
    });
    setPlayerCharacter({
      ...playerCharacter,
      action_points:
        playerCharacter.action_points - playerCharacter.abilities[0].cost_ap,
    });
    /*const clickEvent = document.getElementsByClassName("");
    clickEvent.classList.toggle("");*/
    setAiTurn(true);
    setPlayerTurn(false);
    if (aiTurn === true) {
      attackPlayer();
    }
  }

  function attackPlayer() {
    setPlayerCharacter({
      ...playerCharacter,
      hit_points:
        playerCharacter.hit_points - playerCharacter.abilities[0].damage_hp,
    });
    setEnemyCharacter({
      ...enemyCharacter,
      action_points:
        enemyCharacter.action_points - enemyCharacter.abilities[0].cost_ap,
    });
    if (
      enemyCharacter.hit_points <= (enemyCharacter.hit_points / 100) * 30 &&
      aiTurn === true
    ) {
      healEnemyCharacter();
    }
    setAiTurn(false);
    setPlayerTurn(true);
  }

  function healPlayerCharacter() {
    setPlayerCharacter({
      ...playerCharacter,
      hit_points:
        playerCharacter.hit_points + playerCharacter.abilities[1].damage_hp,
      action_points:
        playerCharacter.action_points - playerCharacter.abilities[1].cost_ap,
    });
    setAiTurn(true);
    setPlayerTurn(false);
  }

  function healEnemyCharacter() {
    setEnemyCharacter({
      ...enemyCharacter,
      hit_points:
        enemyCharacter.hit_points + enemyCharacter.abilities[1].damage_hp,
      action_points:
        enemyCharacter.action_points - enemyCharacter.abilities[1].cost_ap,
    });
    setAiTurn(false);
    setPlayerTurn(true);
  }

  useEffect(() => {
    axios
      .get("http://localhost:8000/login/characterselection", {
        headers: { Authorization: cookies.get("Mycookie") },
        //for the time being, localhost serves as a placeholder
      })
      .then((response) => {
        setCharacters(response.data);
        setEnemyCharacter(
          response.data[Math.floor(Math.random() * response.data.length)]
        );
      })
      .catch((error) => {
        console.log(error);
        window.location.href = "/login";
      });
  }, []);
  if (characters.length && enemyCharacter) {
    //the viewport needs size adjustments
    return (
      <div id="backgroundimage">
        <div id="characterone_container">
          <div className="flip-card">
            <div className="flip-card-front">
              <div className="flip-card-inner">
                <img
                  className="characterimage"
                  src={enemyCharacter.image}
                  alt="character"
                />
              </div>
            </div>
          </div>
          <table className="stats_container">
            <tbody>
              <tr>
                <td>
                  <Image
                    className="ability_icons"
                    src="heart.bmp"
                    alt="heart"
                    roundedCircle
                  />
                </td>
                <td>
                  <h2>HP: {enemyCharacter.hit_points}</h2>
                </td>
                <td>
                  <Image
                    className="ability_icons"
                    src="fist.bmp"
                    alt="fist"
                    roundedCircle
                  />
                </td>
                <td>
                  <h2>AP: {enemyCharacter.action_points}</h2>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div id="charactertwo_container">
          <div className="flip-card">
            <div className="flip-card-front">
              <div className="flip-card-inner">
                <img
                  className="characterimage"
                  src={playerCharacter.image}
                  alt="character"
                />
              </div>
            </div>
          </div>
          <table className="stats_container">
            <tbody>
              <tr>
                <td>
                  <Image
                    className="ability_icons"
                    src="heart.bmp"
                    alt="heart"
                    roundedCircle
                  />
                </td>
                <td>
                  <h2>HP: {playerCharacter.hit_points}</h2>
                  {console.log(playerCharacter.hit_points)}
                </td>
                <td>
                  <Image
                    className="ability_icons"
                    src="fist.bmp"
                    alt="fist"
                    roundedCircle
                  />
                </td>
                <td>
                  <h2>AP: {playerCharacter.action_points}</h2>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div id="battlemenu_container">
          <table id="battlemenu_table">
            <tbody>
              <tr>
                <td>
                  <Button variant="danger" onClick={attackAi}>
                    <h2>Attack</h2>
                  </Button>
                </td>
                <td>
                  <Button variant="success" onClick={healPlayerCharacter}>
                    <h2>Heal</h2>
                  </Button>
                </td>
                <td>
                  <Button variant="light">
                    <h2>Special Ability 1</h2>
                  </Button>
                </td>
                <td>
                  <Button variant="light">
                    <h2>Special Ability 2</h2>
                  </Button>
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
