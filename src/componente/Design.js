import React from 'react'
import './Design.css';
import Brightness5Icon from '@mui/icons-material/Brightness5';


export default function Design() {
  return (<div className='multe'>
    <div className='unu' >
     <div className='container'>
         <Brightness5Icon className='ooo'/> 
         <div>Design Web</div>
         <p>Un nou concept pentru site-ul tau, o noua viziune pentru materialele tale online.</p>
       </div>
    <div className='container'>
    <Brightness5Icon color="primary" sx={{ fontSize: 90 }}/> 
    <div>Design Web</div>
    <p>Un nou concept pentru site-ul tau, o noua viziune pentru materialele tale online.</p>
        </div>
        <div className='container'>
         <Brightness5Icon fontSize="large"/> 
         <div>Design Web</div>
         <p>Un nou concept pentru site-ul tau, o noua viziune pentru materialele tale online.</p>
         </div>
         
    </div>
    <div className='doi' >
     <div className='container'>
         <Brightness5Icon /> 
         <div>Design Web</div>
         <p>Un nou concept pentru site-ul tau, o noua viziune pentru materialele tale online.</p>
       </div>
    <div className='container'>
    <Brightness5Icon /> 
    <div>Design Web</div>
    <p>Un nou concept pentru site-ul tau, o noua viziune pentru materialele tale online.</p>
        </div>
        <div className='container'>
         <Brightness5Icon /> 
         <div>Design Web</div>
         <p>Un nou concept pentru site-ul tau, o noua viziune pentru materialele tale online.</p>
         </div>
         
    </div>
    
    </div>
  )
}
