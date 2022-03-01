import { Button } from '@mui/material';
import React from 'react';
import './Getstart.css';
const Getstart = ({title,content}) => {
  return (
  <div className='row container-fluid'>
     <div className="Conatiner  col-12 col-6">
      <h1 className='title'>{title}</h1>
      <h3 className='content'>{content}</h3>
      <Button style={{backgroundColor:"black" ,color:"white",width:"210px",height:"70px",borderRadius:"20px" ,marginTop:"100px"}}><b  style={{fontSize:"20px"}}>Get Started</b></Button>
     </div>
    
  </div>
  );
};

export default Getstart;
