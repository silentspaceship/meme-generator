import React from "react";

import "./Header.css";

import TrollFace from "../assets/troll-face.svg";

export function Header() {
  return (
    <header>
      <img src={TrollFace} alt="Troll Face Meme" />
      <h1>meme generator</h1>
    </header>
  );
}
