import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header/header'
import Cv from './cv/cv'
import Projects from './projects/projects'
import ModalCon from './contacts/modal'
import Menu from './menu/menu'

function App() {
  return (
    <div className="App">
      <Menu  />
      <Header id='header' />
      <Projects id='projects' />
      <Cv id='cv' />

    </div>
  );
}

export default App;
