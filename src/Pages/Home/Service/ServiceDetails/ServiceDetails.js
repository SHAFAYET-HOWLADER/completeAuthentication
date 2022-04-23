import React, { useEffect, useState } from 'react';
import {Link, useParams } from 'react-router-dom';


const ServiceDetails = () => {
    const {serviceId} = useParams();
     const [service, setServices] = useState({})
     useEffect(()=>{
         fetch(`http://localhost:5000/service/${serviceId}`)
         .then(res=>res.json())
         .then(data=>setServices(data))
     },[])
    return (
        <div className='serviceDetails text-center py-4'>
            <h2>This is service details {service.name}</h2>
            <Link to='/checkout'>
                <button>Explore Now</button>
            </Link>
        </div>
    );
};

export default ServiceDetails;