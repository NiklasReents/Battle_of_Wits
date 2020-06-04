import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <h3>Welcome to Battle of Wits</h3>
      <Link className="link" to="/characterselection">
        <button>Choose your Character and start a Match!</button>
      </Link>
    </div>
  );
}
