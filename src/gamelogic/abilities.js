import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Abilities() {
  const [abilities, setAbilities] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/abilities")
      .then((response) => setAbilities(response.data))
      .catch((error) => console.log(error));
  });

  return <div></div>;
}
