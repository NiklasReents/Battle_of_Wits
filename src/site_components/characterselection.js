import React, { useEffect } from "react";
import axios from "axios";
import styles from "../styles.css";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export default function Characterselection() {
  useEffect(() => {
    axios
      .get("http://localhost:8000/login/characterselection", {
        headers: { Authorization: cookies.get("Mycookie") },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        window.location.href = "/login";
      });
  }, []);

  return (
    <div className="characterselection">
      <h3>Choose your Character!</h3>
      <h4>Monopoly Man{/*to be fetched from db*/}</h4>
      <h4>
        A high risk-and-reward character whose money-based abilities are capable
        of dealing very high damage to his opponent - or himself!
        {/*to be fetched from db*/}
      </h4>
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
            src="monopoly_man.bmp"
            alt="monopoly_man"
          />
        </button>
        {/*to be fetched from db*/}
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
}
