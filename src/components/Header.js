import React from "react";

import "./Header.css";

import TrollFace from "../assets/troll-face.svg";

export function Header() {
  return (
    <header>
      <img className="logo" src={TrollFace} alt="Troll Face Meme" />
      <h2>meme generator</h2>
    </header>
  );
}
