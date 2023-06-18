function insertPlayer() {
  fetch("http://localhost:5000/player", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: "test2",
      password: "test2",
    }),
  })
    .then((res) => {
      return res.text();
    })
    .then((data) => {
      if (data === "SUCCESS") {
        console.log("success");
      }
    });
}

function insertWord(str) {
    fetch("http://localhost:5000/word", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({
        word: str,
        }),
    })
        .then((res) => {
        return res.text();
        })
        .then((data) => {
        if (data === "SUCCESS") {
            console.log("success");
        }
        });
}

function insertGame() {
  fetch("http://localhost:5000/game", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      player1_id: 1,
      player2_id: 2,
      word1: "TEST",
      word2: "RUST",
    }),
  })
    .then((res) => {
      return res.text();
    })
    .then((data) => {
      if (data === "SUCCESS") {
        console.log("success");
      }
    });
}

insertWord("TEST");
insertWord("RUST");
// insertGame();
