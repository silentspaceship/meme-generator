import React from "react";

import "./Header.scss";

import TrollFace from "../assets/troll-face.svg";

export function Header() {
  return (
    <header>
      <img className="logo" src={TrollFace} alt="Troll Face Meme" />
      <h2 className="title">meme generator</h2>
    </header>
  );
}
