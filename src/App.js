import React from 'react';
import Navbar from './components/Navbar/Navbar';
import MyPage from './components/MyPage/MyPage';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import './App.css';


function App() {
  return (
    <div  >
      <Navbar/>
      <MyPage/>
      <About/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
    
  );
}

export default App;
