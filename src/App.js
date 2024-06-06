import React from 'react';
import "./App.css"
import Header from './components/header/Header';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';
import Qualification from './components/qualification/Qualification';
import Projects from './components/projects/Projects';

const App = () => {
  return (
    <>
        <Header />
        <main className='main'>
          <Home />
          <Skills />
          <Qualification />
          <Projects />
        </main>
    </>
  )
}

export default App