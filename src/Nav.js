import React from 'react'
import './styles/nav.css'
import { FaHome,FaUser,FaProjectDiagram,FaCertificate,FaAddressCard,FaScribd,FaGoodreadsG} from "react-icons/fa";

const Nav = ({setCurrentPage}) => {
  return (
    <nav>
        <div className='navHead'><FaScribd /><FaGoodreadsG /></div>
        <span onClick={()=>setCurrentPage('home')}><FaHome /><p>HOME</p></span>
        <span onClick={()=>setCurrentPage('about')}><FaUser /><p>ABOUT</p></span>
        <span onClick={()=>setCurrentPage('project')}><FaProjectDiagram /><p>PROJECTS</p></span>
        <span onClick={()=>setCurrentPage('certificate')}><FaCertificate /> <p>CERTIFICATES</p></span>
        <span onClick={()=>setCurrentPage('contact')}><FaAddressCard /><p>CONTACT</p></span>
    </nav>
  )
}

export default Nav