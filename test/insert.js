function insertPlayer(usr) {
  fetch("http://localhost:5000/player", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: usr,
      password: usr,
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

function insertLobby(str) {
  fetch("http://localhost:5000/lobby", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      player_id: 1,
      name: str,
    }),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    });
}

// insertPlayer("user1");
// insertPlayer("user2");

// insertWord("TEST");
// insertWord("RUST");
// insertGame();

insertLobby("lobbyfiller");
insertLobby("lobbyfiller2");
