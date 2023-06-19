import React, {useEffect} from 'react';
import {BrowserRouter as BRouter, Routes, Route} from 'react-router-dom';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { CreateLobby } from './components/CreateLobby';
import {JoinLobby} from './components/JoinLobby';
import { About } from './components/About';
import { Rules } from './components/Rules';
import { Game } from './components/Game';
import Navbar from './components/Navbar';
<<<<<<< HEAD
import { LeaderBoard } from './components/LeaderBoard';
=======
import './App.css'; 
>>>>>>> 2d1f5cadef0ab8480f2c087b798a35027ae8b382



function App() {
  useEffect(() => {
    const body = document.querySelector('body');
    const savedBackground = localStorage.getItem('background');

    if (savedBackground) {
      body.classList.add(savedBackground);
    } else {
      body.classList.add('body-background');
      localStorage.setItem('background', 'body-background');
    }

    return () => {
      body.classList.remove('body-background');
    };
  }, []);

  return(
    <BRouter>
      <Navbar />
      <div >
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
          <Route path="/createlobby" Component={CreateLobby}/>
          <Route path="/joinlobby" Component={JoinLobby}/>
          <Route path= "/about" Component={About}/>
<<<<<<< HEAD
          <Route path="/rules" Component={Rules} />          
          <Route path="/leaderboard" Component={LeaderBoard} />
=======
          <Route path="/rules" Component={Rules}/>
          <Route path="/game/:id/:playerId" Component={Game}/>
>>>>>>> 2d1f5cadef0ab8480f2c087b798a35027ae8b382
        </Routes>
      </div>
    </BRouter>
  );
}

export default App;
