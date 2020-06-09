import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Abilities() {
  const [abilities, setAbilities] = useState([]);
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/abilities")
      .then((response) => setAbilities(response.data))
      .catch((error) => console.log(error));

    axios
      .get("http://localhost:8000/login/characterselection")
      .then((response) => setCharacters(response.data))
      .catch((error) => console.log(error));
  }, []);

  const attack = function () {
    setCharacters(
      (characters[0].hit_points =
        characters[0].hit_points - abilities[0].damage_hp),
      setCharacters(
        (characters[0].action_points =
          characters[0].action_points - abilities[0].cost_ap)
      )
    );
  };

  const heal = function () {
    setCharacters(
      (characters[0].hit_points =
        characters[0].hit_points - abilities[1].damage_hp),
      setCharacters(
        (characters[0].action_points =
          characters[0].action_points - abilities[1].cost_ap)
      )
    );
  };

  return <div></div>;
}
