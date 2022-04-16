import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'
const Service = ({service}) => {
    const {name, price, img, description,id} = service;
    const navigate = useNavigate();
    const navigateToDetails = ()=>{
        navigate(`/service/${id}`)
    }
    return (
        <div className='service'>
            <img
            style={{
                height: "250px",
                width : "100%",
                objectFit : "cover",
                borderRadius: "8px"
            }}
            src={img} alt='img'/>
            <h3>{name}</h3>
            <h4>Price : {price}</h4>
            <small>Info: {description}</small>
            <br/>
            <button onClick={()=>navigateToDetails(id)} type='button'>More Info</button>
        </div>
    );
};

export default Service;