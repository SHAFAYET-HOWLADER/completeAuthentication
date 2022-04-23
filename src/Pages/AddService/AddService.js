import React from 'react';
import { useForm } from "react-hook-form";
const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data,event) => {
        console.log(data);
        fetch('http://localhost:5000/service', {
            method: "POST",
            headers: {
                'content-type': "application/json",
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                event.target.reset();
            })
    };
    return (
        <div>
            <h2 className='text-center'>add service here</h2>
            <form className='w-50 d-flex flex-column mx-auto mb-3' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='name' type='text' className='mb-2' {...register("name")} />
                <input placeholder='price' className='mb-2' type="number" {...register("price")} />
                <textarea placeholder='description' type='text' className='mb-2' {...register("description")} />
                <input placeholder='photo url' className='mb-2' type="text" {...register("img")} />
                <input className='mb-2' type="submit" value='addService' />
            </form>
        </div>
    );
};

export default AddService;
