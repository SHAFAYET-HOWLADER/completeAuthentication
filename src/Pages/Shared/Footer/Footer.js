import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    const today = new Date();
    const year  = today.getFullYear();
    return (
        <footer>
            <div className='text-center bg-dark text-white fs-4 py-3'>
               <small>All right reserved &copy; {year} </small>
            </div>
        </footer>
    );
};

export default Footer;