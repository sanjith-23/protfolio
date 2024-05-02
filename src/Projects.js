import React, { useState, useEffect,useCallback } from 'react';
import './styles/project.css';
import { FaTimesCircle } from "react-icons/fa";
import one from './images/GSA_imgs/1.png';
import two from './images/GSA_imgs/2.png';
import three from './images/GSA_imgs/3.png';
import four1 from './images/GSA_imgs/4.1.png';
import four2 from './images/GSA_imgs/4.2.png';
import five1 from './images/GSA_imgs/5.1.png';
import five2 from './images/GSA_imgs/5.2.png';
import six from './images/GSA_imgs/6.png';
import seven1 from './images/GSA_imgs/7.1.png';
import seven2 from './images/GSA_imgs/7.2.png';
import seven3 from './images/GSA_imgs/7.3.png';
import seven4 from './images/GSA_imgs/7.4.png';
import seven5 from './images/GSA_imgs/7.5.png';
import eight from './images/GSA_imgs/8.png';
import nine1 from './images/GSA_imgs/9.1.png';
import nine2 from './images/GSA_imgs/9.2.png';
import nine3 from './images/GSA_imgs/9.3.png';
import nine4 from './images/GSA_imgs/9.4.png';
import nine5 from './images/GSA_imgs/9.5.png';
import nine6 from './images/GSA_imgs/9.6.png';
import ten1 from './images/GSA_imgs/10.1.png';
import ten2 from './images/GSA_imgs/10.2.png';
import ten3 from './images/GSA_imgs/10.3.png';
import ten4 from './images/GSA_imgs/10.4.png';
import ten5 from './images/GSA_imgs/10.5.png';
import todo from './images/todolist.png';
import sps from './images/sps.png';

const Projects = () => {
  const [currentProject,setCurrentProject]=useState('gsa');
  const [selectedimg,setSelectedImg]=useState(null);
  const [clickedPage,setClickedPage]=useState(false);
  const images = [one, two, three, four1, four2,five1,five2,six,seven1,seven2,seven3,seven4,seven5,eight,nine1,nine2,nine3,nine4,nine5,nine6,ten1,ten2,ten3,ten4,ten5];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(nextImage, 4000);
    return () => clearInterval(interval);
  }, [nextImage]);
  const handleClickSelectImg=(imgpath)=>{
    setSelectedImg(imgpath)
    setClickedPage(true)
  }

  return (
    <div className='project'>
      <h1>PROJECTS</h1>
      <div className='projectList'>
      <span onClick={()=>setCurrentProject('gsa')}>GSA WEBSITE</span>
      <span onClick={()=>setCurrentProject('todo')}>TODO LIST</span>
      <span onClick={()=>setCurrentProject('sps')}>STONE PAPER SCISSOR</span>
      </div>
      <ul>
        {currentProject==='gsa'&&(
        <li>
          <h2>1. GobiArts Sports Academy Website</h2>
          <ul className='GSA'>
            <li>
                <img
                src={images[(currentImageIndex + images.length - 1) % images.length]}
                alt='GSA'
                onClick={prevImage}/>

              <img 
                src={images[currentImageIndex]} 
                alt='GSA'
                onClick={()=>handleClickSelectImg(images[currentImageIndex])} 
                onTouchStart={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
              />
              <img 
                src={images[(currentImageIndex + 1) % images.length]}
                alt='GSA'
                onClick={nextImage}/>
            </li>
            <li>
                <h3>ABOUT THE PROJECT</h3>
                <p> &nbsp;&nbsp;&nbsp;&nbsp;(REACT JS, CSS, PYTHON, MySQL)
                Create a dynamic and user-friendly website for
                a College Sports Academy using modern
                technologies.
                The website will provide information about the
                academy, its sports programs, schedules,
                students attandance management system, staff
                page, students page, admin page and other
                relevant details.
            </p>
            </li>
          </ul>
        </li>
        )}
        {currentProject === 'todo' &&(
        <li>
            <h2>2. TODO LIST</h2>
            <img src={todo} alt='TODO'/>
            <a href='https://sanjith-23.github.io/ToDoList'>View</a>
            <h3>ABOUT THE PROJECT</h3>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;Creating a to-do list app in ReactJS involves setting up the environment, structuring components, managing state, implementing core functionalities, styling, deploying, and potentially adding advanced features like user authentication. Aim for clean, maintainable code and ensure accessibility throughout the development process.</p>
        </li>)}
        {currentProject === 'sps' &&(
        <li>
            <h2>3. STONE PAPER SCISSOR</h2>
            <img src={sps} alt='SPS'/>
            <a href='https://sanjith-23.github.io/StonePaperScissor'>View</a>
            <h3>ABOUT THE PROJECT</h3>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;In this project, we're developing a digital adaptation of the classic stone-paper-scissors game using HTML, CSS, and JavaScript. Players will engage in rounds against the computer, selecting their choice of stone, paper, or scissors. The game's logic, including random computer selections and result determination, will be implemented in JavaScript. Our goal is to create an intuitive user interface, track scores, and provide instant feedback on round outcomes. Through this project, we aim to enhance our programming skills while delivering an enjoyable gaming experience for users.</p>
        </li>)}
      </ul>
     {clickedPage&&
      <div className='selectedImage'>
            <FaTimesCircle onClick={()=>setClickedPage(false)}/>
            <img src={selectedimg} alt='pic'/>
      </div>}
    </div>
  );
};

export default Projects;
