import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// todo:
// 1. get the word, guesses, and lives from the server, based on the game id and player id
// 2. update the game state when player makes a guess

function Word(props) {
    const wordArray = props.wordArray;
    // big font size, letters spaced out
    const wordStyle = {
        fontSize: "2em",
        letterSpacing: "0.5em",
    }
    return (
        <div style={wordStyle}>
            {wordArray.map((letter) => (
                <span>{letter}</span>
            ))}
        </div>
    );
}

export const Game = () => {
  const { id, playerId } = useParams();
  console.log("game id", id);

  const [game, setGame] = useState({
    word: "",
    guesses: "",
    lives: 0,
  });

  useEffect(() => {
    const url = `http://localhost:5000/game/${id}`;
    fetch(url).then((res) => {
      res.json().then((data) => {
        if (playerId === data.player1_id.toString()) {
          setGame({
            word: data.word1,
            guesses: data.guesses1,
            lives: data.lives1,
          });
          console.log("joined as p1");
        } else if (playerId === data.player2_id.toString()) {
          setGame({
            word: data.word2,
            guesses: data.guesses2,
            lives: data.lives2,
          });
          console.log("joined as p2");
        }
      });
    });
  }, [id, playerId]);

  // Convert word to an array, modify it, and join it back to a string
  const wordArray = game.word.split("");
  for (let i = 0; i < wordArray.length; i++) {
    if (game.guesses.indexOf(wordArray[i]) === -1) {
      wordArray[i] = "_";
    }
  }

  // Display the guesses in a JSX list
  const guessesList = game.guesses.split("").map((guess) => (
    <li key={guess}>{guess}</li>
  ));
    
  // display the lives (hangman image)
  // todo: display the hangman image

  return (
    <div className="game">
      <h1>Game #{game.id}</h1>
      <Word wordArray={wordArray}/>
      <h2>Guesses: {guessesList}</h2>
      <h2>Lives: {game.lives}</h2>
    </div>
  );
}
