import React, { useState } from 'react'
import './styles/certificate.css';
import { FaTimesCircle } from "react-icons/fa";
import one from './images/certificate1.jpg';
import two from './images/certificate2.JPG';
import three from './images/certificate3.jpg';

const Certificate = () => {
    const [selectedimg,setSelectedImg]=useState(null);
    const [clickedPage,setClickedPage]=useState(false);
    const handleClickSelectImg=(imgpath)=>{
        setSelectedImg(imgpath)
        setClickedPage(true)
      }
  return (
    <div className='certificate'>
        <h1>CERTIFICATES</h1>
        <ul>
            <li><img src={one} alt="certificate" onClick={()=>handleClickSelectImg(one)}/></li>
            <li><img src={two} alt="certificate" onClick={()=>handleClickSelectImg(two)}/></li>
            <li><img src={three} alt="certificate" onClick={()=>handleClickSelectImg(three)}/></li>
        </ul>
        {clickedPage&&
      <div className='selectedImage'>
            <FaTimesCircle onClick={()=>setClickedPage(false)}/>
            <img src={selectedimg} alt='pic'/>
      </div>}
    </div>
  )
}

export default Certificate