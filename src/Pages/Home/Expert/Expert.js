import React from 'react';
import './Expert.css'
const Expert = ({expert}) => {
   const {img, name, rating, experience }=  expert;
    return (
        <div className='expert'>
            <img
                style={{
                    height: "250px",
                    width : "100%",
                    objectFit : "cover",
                    borderRadius: "8px"
                }}
             src={img} alt='img'/>
            <h3>{name}</h3> 
            <h3>Experience : {experience}</h3> 
            <p>Ratings : {rating}</p>    
        </div>
    );
};

export default Expert;