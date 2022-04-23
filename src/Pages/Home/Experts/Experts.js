import React from 'react';
import Expert from '../Expert/Expert';
import './Experts.css'
import experts1 from '../../../experts/expert_one (1).jpg'
import experts2 from '../../../experts/expert_one (2).jpg'
import experts3 from '../../../experts/expert_one (3).jpg'
import experts4 from '../../../experts/expert_one (4).jpg'
import experts5 from '../../../experts/expert_one (5).jpg'
import experts6 from '../../../experts/expert_one (6).jpg'
import experts7 from '../../../experts/expert_one (7).jpg'
import experts8 from '../../../experts/expert_one (8).jpg'
import experts9 from '../../../experts/expert_one (9).jpg'
import experts10 from '../../../experts/expert_one (10).jpg'
import PageTitle from '../../Shared/PageTitle/PageTitle';

const experts = [
    {
        rating: 4,
        name: "William",
        id: 1,
        experience: '3yr',
        img: experts1
    },

    {
        rating: 4.5,
        name: "David",
        id: 2,
        experience: '4yr',
        img: experts2
    },

    {
        rating: 5,
        name: "charles",
        id: 3,
        experience: '5yr',
        img: experts3
    },

    {
        rating: 3.5,
        name: "Arian",
        id: 4,
        experience: '2yr',
        img: experts4

    },

    {
        rating: 3.5,
        name: "Arian",
        id: 5,
        experience: '4yr',
        img: experts5
    },

    {
        rating: 3.5,
        name: "Arian",
        id: 6,
        experience: '5yr',
        img:experts6
           
    },

    {
        rating: 3.5,
        name: "Arian",
        id: 7,
        experience: '6yr',
        img: experts7
    },
    {
        rating: 3.5,
        name: "Arian",
        id: 8,
        img: experts8
    },
    {
        rating: 3.5,
        name: "Arian",
        id: 9,
        experience: '4yr',
        img: experts9
    },
    {
        rating: 3.5,
        name: "Arian",
        id: 10,
        experience: '5yr',
        img: experts10
    }
]

const Experts = () => {
    return (
        <div>
           <PageTitle title="Experts"></PageTitle>
            <h2 className='text-success text-center py-3'>Our experts</h2>
            <div className='experts'>
                {
                    experts.map(expert => <Expert
                        key={expert.id}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;