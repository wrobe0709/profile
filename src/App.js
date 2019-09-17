import './App.scss';
import Footer from './component/footer/footer';
import Header from './component/header/header';
import Home from './component/home/home';
import Projects from './component/projects/projects';
import React from 'react';
import Resume from './component/resume/resume';
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          <Home />
          <Resume />
          <Projects />
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
