import React from 'react';
import {BrowserRouter as BRouter, Routes, Route} from 'react-router-dom';
import { Guia } from './components/Guia';
import { Home } from './components/Home';
import Navbar from './components/Navbar';


function App() {
  return(
    <BRouter>
      <Navbar />
  
      <div >
        <Routes>
          <Route path= "/guia" Component={Guia}/>
          <Route path="/" Component={Home} />
        </Routes>
      </div>
    </BRouter>
  );
}

export default App;