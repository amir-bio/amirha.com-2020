import React from 'react'
import './App.css'

import 'typeface-roboto'
import 'typeface-roboto-mono'

import myPhoto from './me.png'

import TopNavBar from './components/TopNavBar'
import AboutMe from './components/AboutMe'
import ToolsAndTech from './components/ToolsAndTech'
// import Timeline from './components/Timeline'
import Copyright from './components/Copyright'

function App() {
  return (
    <div className="App">
      <TopNavBar id="top-nav-bar" />
      <AboutMe id="about-me" photoPath={myPhoto} />
      <ToolsAndTech id="tools-tech" />
      {/* <Timeline /> */}
      <Copyright />
    </div>
  )
}

export default App
