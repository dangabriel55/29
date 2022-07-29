import React from 'react'
import logo from './logo.png'; 
import './Navbar.css';
import Brightness5Icon from '@mui/icons-material/Brightness5';


export default function Navbar() {
  return (
    <div className='toate'>
      <div>
        <img src={logo} alt="Logo" />
      </div>
      <ul>
        <li>Home</li>
        <li>Servicii</li>
        <li>Proiecte</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
      <div className='coloss'> <Brightness5Icon />  </div>
</div>
  )
}
