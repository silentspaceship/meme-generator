import React, { useState, useEffect } from "react";

import "./Meme.scss";

export function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function handleGetMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;

    setMeme((prevImage) => ({
      ...prevImage,
      randomImage: url,
    }));
  }

  function handleTextChange(event) {
    const { name, value } = event.target;
    setMeme((prevText) => ({
      ...prevText,
      [name]: value,
    }));
  }

  return (
    <main className="content">
      <div className="form">
        <div className="input-container">
          <input
            type="text"
            placeholder="top text"
            name="topText"
            onChange={handleTextChange}
            value={meme.topText}
          />
          <input
            type="text"
            placeholder="bottom text"
            name="bottomText"
            onChange={handleTextChange}
            value={meme.bottomText}
          />
        </div>
        <button className="meme-button" onClick={handleGetMemeImage}>
          get a new meme image 🎨
        </button>
        <div className="meme">
          <img
            className="meme-image"
            src={meme.randomImage}
            alt={allMemes.name}
          />
          {meme.randomImage !== "" && (
            <h2 className="meme-text top">{meme.topText}</h2>
          )}
          {meme.randomImage !== "" && (
            <h2 className="meme-text bottom">{meme.bottomText}</h2>
          )}
        </div>
      </div>
    </main>
  );
}
