import React from 'react';
import {Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {serviceId} = useParams();
    return (
        <div className='serviceDetails text-center py-4'>
            <h2>This is service details {serviceId}</h2>
            <Link to='/checkout'>
                <button>Explore Now</button>
            </Link>
        </div>
    );
};

export default ServiceDetails;