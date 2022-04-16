import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css'
import auth from '../../../firebase.init';
import { useState } from 'react';
import SocialLogin from '../../SocialLogin/SocialLogin';
const Register = () => {
    const navigate = useNavigate();
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
  
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigateToLogin = () => {
        navigate('/login');
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.email.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName : name});
        console.log('Updated profile');
        navigate('/home');
    }

    let errorHandle;
    if (error) {
        errorHandle = <p className='text-center'>Error : {error.message}</p>
    }
    let spinner;
    if (loading) {
        spinner = <p className='text-center'>Please wait..... </p>
    }
    return (
        <div className='register'>
            <h2 style={{ textAlign: 'center', }}>This is register</h2>
            <form onSubmit={handleRegister}>
                <input type='text' name='name' id='name' placeholder='Your name' />
                <input type='email' name='email' id='email' placeholder='Your Email' required />
                <input type='password' name='password' id='password' placeholder='Your password' required />
                <div style={{cursor: 'pointer'}}  className='text-center my-3'>
                    <input onClick={()=>setAgree(!agree)} type='checkbox' name='terms' id='terms' />                      
                    &nbsp;
                    <label className={agree ? 'text-success':'text-danger'} htmlFor='terms'>Accept terms and condition</label>
                </div>
                <input disabled={!agree} className='bg-warning' type='submit' value='Register' />
                {errorHandle}
                {spinner}
            </form>
            <p className='text-center'>Already have an account ? <Link to='/login' onClick={navigateToLogin}>Please login here</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;