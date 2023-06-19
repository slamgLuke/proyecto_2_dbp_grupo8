import React from 'react';
import {BrowserRouter as BRouter, Routes, Route} from 'react-router-dom';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { CreateLobby } from './components/CreateLobby';
import {JoinLobby} from './components/JoinLobby';
import { About } from './components/About';
import { Rules } from './components/Rules';
import Navbar from './components/Navbar';
import { LeaderBoard } from './components/LeaderBoard';



function App() {
  return(
    <BRouter>
      <Navbar />
      <div >
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
          <Route path="/createlobby" Component={CreateLobby} />
          <Route path="/joinlobby" Component={JoinLobby} />
          <Route path= "/about" Component={About}/>
          <Route path="/rules" Component={Rules} />          
          <Route path="/leaderboard" Component={LeaderBoard} />
        </Routes>
      </div>
    </BRouter>
  );
}

export default App;
