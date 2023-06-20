import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export const LeaderBoard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  useEffect(() => {
    const url = "http://localhost:5000/leaderboard";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setLeaderboard(data);
      });
  }, []);

  const handlePlayerClick = (player) => {
    setSelectedPlayer(player);
  };

  return (
    <div
      className="Board"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div>
        <h1 className="LeaderBoard" style={headingStyle}>
          LeaderBoard
        </h1>

        <TableContainer component={Paper} style={tableStyle}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={headerCellStyle}>User</TableCell>
                <TableCell style={headerCellStyle}>Wins</TableCell>
                <TableCell style={headerCellStyle}>Defeats</TableCell>
                <TableCell style={headerCellStyle}>Games Played</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {leaderboard.map((player, index) => (
                <TableRow
                  key={player.id}
                  onClick={() => handlePlayerClick(player)}
                >
                  <TableCell style={cellStyle}>{player.username}</TableCell>
                  <TableCell style={cellStyle}>{player.wins}</TableCell>
                  <TableCell style={cellStyle}>{player.defeats}</TableCell>
                  <TableCell style={cellStyle}>{player.gamesPlayed}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {selectedPlayer && (
          <div style={selectedPlayerStyle}>
            <h2>{selectedPlayer.username}</h2>
            <p>Wins: {selectedPlayer.wins}</p>
            <p>Defeats: {selectedPlayer.defeats}</p>
            <p>Games Played: {selectedPlayer.gamesPlayed}</p>
          </div>
        )}
      </div>
    </div>
  );
};

// Estilos en línea proporcionados por Material-UI
const headingStyle = {
  textAlign: "center",
  fontFamily: "Arial",
};

const tableStyle = {
  width: "100%",
  margin: "20px",
};

const headerCellStyle = {
  backgroundColor: "#f2f2f2",
  color: "#800000",
  fontWeight: "bold",
  padding: "10px",
  textAlign: "left",
};

const cellStyle = {
  backgroundColor: "#ffffff",
  color: "#432f28",
  padding: "10px",
};

const selectedPlayerStyle = {
  backgroundColor: "#f2f2f2",
  padding: "20px",
  marginTop: "20px",
};
