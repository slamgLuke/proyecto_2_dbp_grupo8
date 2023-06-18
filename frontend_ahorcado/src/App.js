import React, {useEffect} from 'react';
import {BrowserRouter as BRouter, Routes, Route} from 'react-router-dom';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { CreateLobby } from './components/CreateLobby';
import {JoinLobby} from './components/JoinLobby';
import { About } from './components/About';
import { Rules } from './components/Rules';
import Navbar from './components/Navbar';
import './App.css'; 



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
          <Route path="/createlobby" Component={CreateLobby} />
          <Route path="/joinlobby" Component={JoinLobby} />
          <Route path= "/about" Component={About}/>
          <Route path="/rules" Component={Rules} />          
        </Routes>
      </div>
    </BRouter>
  );
}

export default App;
