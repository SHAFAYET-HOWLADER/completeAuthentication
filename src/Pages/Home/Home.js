import React from 'react';
import Banner from '../Banner/Banner';
import Services from './Services/Services';
import Experts from './Experts/Experts';
import PageTitle from '../Shared/PageTitle/PageTitle';


const Home = () => {
    return (
        <div className='home'>
          <PageTitle title="Home"></PageTitle>
            <Banner></Banner>
            <Services></Services>
            <Experts></Experts>
        </div>
    );
};

export default Home;