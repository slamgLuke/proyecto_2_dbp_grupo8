import React, { useState, useEffect } from "react";

// todo:
// 1. get the word, guesses, and lives from the server, based on the game id and player id
// 2. update the game state when player makes a guess

function Game(props) {
  const { id, playerId } = props.match.params;

  const [game, setGame] = useState({
    word: "",
    guesses: "",
    lives: 0,
  });

  useEffect(() => {
    const url = `/game/${id}`;
    fetch(url).then((res) => {
      res.json().then((data) => {
        if (playerId === data.player1_id) {
          setGame({
            word: data.word1,
            guesses: data.guesses1,
            lives: data.lives1,
          });
        } else if (playerId === data.player2_id) {
          setGame({
            word: data.word2,
            guesses: data.guesses2,
            lives: data.lives2,
          });
        }
      });
    });
  }, []);

  // display the word ( _ if the letter has not been guessed, the letter if it has been guessed)
  const word = game.word;
  for (let i = 0; i < word.length; i++) {
    if (game.guesses.indexOf(word[i]) === -1) {
      word[i] = "_";
    }
  }
  // display the guesses in a jsx list
  const guessesList = [];
  for (let i = 0; i < game.guesses.length; i++) {
    guessesList.push(<li>{guesses[i]}</li>);
  }
  // display the lives (hangman image)
  // todo: display the hangman image

  return (
    <div className="game">
      <h1>Game</h1>
      <h2>Word: {word}</h2>
      <h2>Guesses: {guessesList}</h2>
      <h2>Lives: {game.lives}</h2>
    </div>
  );
}

export default Game;
