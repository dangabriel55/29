import React from 'react'
import './Black.css';
import bla from './bla.jpg'; 

export default function Black() {
  return (
    <div className='black'>
        <div className='coo'>
            <div> <img src={bla} alt="Logo"   style={{ height: '370px'}}  /> </div>
            <div> <img src={bla} alt="Logo"   style={{ height: '370px'}}  /> </div>
            <div> <img src={bla} alt="Logo"   style={{ height: '360px'}}  /> </div>
        </div>
    </div>
  )
}
