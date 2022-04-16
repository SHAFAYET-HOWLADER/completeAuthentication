import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'
const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch("data.json")
        .then(res=>res.json())
        .then(data =>setServices(data))
    },[])
    return (
        <div>
            <h2 className='
            text-success 
            text-center
            py-4
            '>Our services</h2>
            <div className='services'>
            {
                services.map(service=> <Service
                     key={service.id}
                     service={service}
                     ></Service>)
            }
        </div>
        </div>
    );
};

export default Services;