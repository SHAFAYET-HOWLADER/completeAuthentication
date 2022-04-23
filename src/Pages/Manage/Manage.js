import React from 'react';
import useService from '../../Hooks/useHooks';

const Manage = () => {
    const [services, setServices] = useService();
    const deleteService = (id)=>{
      fetch(`http://localhost:5000/service/${id}`,{
          method: 'DELETE'
      })
      .then(res=>res.json())
      .then(data=>{
          const proceed = window.confirm('are you sure? you want to delete?')
          if(proceed){
             const remaining = services.filter(service=> service._id !== id);
             setServices(remaining)
          }
      })
    }
    return (
        <div>
            <h2 className='text-center'>manage user</h2>
            <div className='text-center'>
                {
                    services.map(service => <div key={service._id}>
                        {service.name}
                        <button onClick={()=>deleteService(service._id)}>X</button>
                    </div>)
                }
                
          </div>
        </div>
    );
};

export default Manage;