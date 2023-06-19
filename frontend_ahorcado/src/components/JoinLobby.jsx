import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

//styled component de MUI para Item
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  fontSize: "2rem",
  color: theme.palette.text.secondary,
}));

//COMPONENTE LOBBY (FILAS DE LA TABLA)
function Lobby() {
  const { id, name, playerId } = useParams();
  const [playerName, setPlayerName] = useState("");

  useEffect(() => {
    const url = `https://localhost:5000/player/${playerId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPlayerName(data.name);
      });
  }, [playerId]);

  return (
    <Item>
      ID: {id} name: {name} player: {playerName}
    </Item>
  );
}

//COMPONENTE JOINLOBBY
export const JoinLobby = () => {
  const [lobbies, setLobbies] = useState([]);

  useEffect(() => {
    const url = "https://localhost:5000/lobby";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        for (let i = 0; i < data.length; i++) {
          setLobbies((prevLobbies) => [
            ...prevLobbies,
            <Lobby
              id={data[i].id}
              name={data[i].name}
              playerId={data[i].playerId}
            />,
          ]);
        }
      });
  }, []);

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#000000" }}>
      <Grid container spacing={2}>
        {/* Cuenta del usuario */}
        <Grid item xs={12} sm={4} sx={{ marginTop: "30px" }}>
          <Box sx={{ margin: "30px" }}>
            <Item>CUENTA</Item>
          </Box>
        </Grid>

        {/* Partidas disponibles */}
        <Grid item xs={12} sm={8} sx={{ marginTop: "30px" }}>
          <Box sx={{ margin: "30px" }}>
            <Item>PARTIDAS DISPONIBLES</Item>
            {lobbies}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
