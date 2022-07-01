import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
    document.body.style.backgroundColor = (mode === 'light' ? 'white' : 'black');
  }

  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/users" element={<div className="container">We are users...</div>}/>
          <Route exact path="/" element={<TextForm fieldLabel="Enter Text" mode={mode} toggleMode={toggleMode} />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
