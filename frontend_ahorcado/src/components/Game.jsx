import React, { useState, useEffect } from "react";

// todo:
// 1. get the word, guesses, and lives from the server, based on the game id and player id
// 2. update the game state when player makes a guess

function Game(id, playerid) {
    const [game, setGame] = useState({
        word: "",
        guesses: [],
        lives: 0,
    });

    useEffect(() => {
        const url = `/games/${id}`;
        fetch(url).then((res) => {
            res.json().then((data) => {
                if (playerid === data.player1) {
                    setGame({
                        word: data.word1,
                        guesses: data.guesses1,
                        lives: data.lives1,
                    });
                } else if (playerid === data.player2) {
                    setGame({
                        word: data.word2,
                        guesses: data.guesses2,
                        lives: data.lives2,
                    });
                }
            });
        });
    }, []);

    return (
        <div className="game">
            <h1>Game</h1>
        </div>
    );
}

export default Game;
