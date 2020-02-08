import React from 'react'
import logo from './logo.svg'
import './App.css'

import 'typeface-roboto'
import 'typeface-roboto-mono'

import myPhoto from './me.png'

import TopNavBar from './components/TopNavBar'
import AboutMe from './components/AboutMe'
import ToolsAndTech from './components/ToolsAndTech'

function App() {
  return (
    <div className="App">
      <TopNavBar id="top-nav-bar" />
      <AboutMe id="about-me" photoPath={myPhoto} />
      <ToolsAndTech />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  )
}

export default App
