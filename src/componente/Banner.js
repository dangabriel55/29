import React from 'react'
import ban from './ban.jpg'; 
import './Banner.css';


export default function Banner() {
  return (
    <div>
        <img className='banner' src={ban} alt="ghjkhkj" />
        <div className='textt'>
            <div style={{ fontWeight: 'bold'}}>Campanii de marketing </div>
            <div>interactive & Design web</div>
        </div>
    </div>
  )
}
