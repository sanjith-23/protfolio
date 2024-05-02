import { useEffect, useRef, useState } from 'react';
import About from './About';
import './App.css';
import Home from './Home';
import Nav from './Nav';
import Projects from './Projects';
import Certificate from './Certificate';
import Contact from './Contact';

function App() {
  const [currentPage,setCurrentPage]=useState('home');
  const homeRef=useRef(null);
  const aboutRef=useRef(null);
  const projectRef=useRef(null);
  const certificateRef=useRef(null);
  const contactRef=useRef(null);

  useEffect(()=>{
    if(currentPage==='home'){
      homeRef.current.scrollIntoView();
    }else if(currentPage==='about'){
      aboutRef.current.scrollIntoView();
    }else if(currentPage==='project'){
      projectRef.current.scrollIntoView();
    }else if(currentPage==='certificate'){
      certificateRef.current.scrollIntoView();
    }else if(currentPage==='contact'){
      contactRef.current.scrollIntoView();
    }
  },[currentPage])
  return (
    <div className="App">
      <Nav setCurrentPage={setCurrentPage}/>
      <div ref={homeRef}>
        <Home/>
      </div>
      <div ref={aboutRef} >
        <About/>
      </div>
      <div ref={projectRef}>
        <Projects/>
      </div>
      <div ref={certificateRef}>
        <Certificate/>
        </div>
      <div ref={contactRef}>
        <Contact/>
        </div>
    </div>
  );
}

export default App;
