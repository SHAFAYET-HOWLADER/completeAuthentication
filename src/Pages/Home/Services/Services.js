import React, { useEffect, useState } from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Service from '../Service/Service';
import './Services.css'
const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/service")
        .then(res=>res.json())
        .then(data =>setServices(data))
    },[])
    return (
        <div>
           <PageTitle title="services"></PageTitle>
            <h2 className='
            text-success 
            text-center
            py-4
            '>Our services</h2>
            <div className='services'>
            {
                services.map(service=> <Service
                     key={service._id}
                     service={service}
                     ></Service>)
            }
        </div>
        </div>
    );
};

export default Services;