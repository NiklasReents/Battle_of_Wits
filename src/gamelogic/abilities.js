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

  return <div></div>;
}
