import React from 'react';
import "./Box.css"


const TempBox = ({img,name}) => {
  return ( 
    <div className='box'>
      <a href='#'> <img src={img} height={250} width={450}/></a>
       <h3 style={{marginTop:"20px"}}>{name}</h3>
    </div>
  );
};

export default TempBox;
