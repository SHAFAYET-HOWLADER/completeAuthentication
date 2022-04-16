import React from 'react';
import './SocialLogin.css'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useSignInWithGithub } from 'react-firebase-hooks/auth';
import { useSignInWithFacebook } from 'react-firebase-hooks/auth';
import google from '../../banner_images/google.png';
import facebook from '../../banner_images/facebook.png';
import github from '../../banner_images/github.png';
import auth from '../../firebase.init';
import {useNavigate } from 'react-router-dom';
const SocialLogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    let [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    let [signInWithFacebook, user2, loading2, error2] = useSignInWithFacebook(auth);
    if(user){
        navigate('/home');
    }
    if(user1){
        navigate('/experts');
    }
    if(user2){
        navigate('/services');
    }
    const googleSignIn = ()=>{
        signInWithGoogle()
    }
    const gitHubSignIn = ()=>{
        signInWithGithub()
    }
    const facebookSignIn = ()=>{
        signInWithFacebook()
    }
    return (
        <div>
            <div className='my-3 social_login d-flex justify-content-center align-items-center'>
                <div style={{
                    height: '1px',
                    width: '150px',
                    backgroundColor: '#d1d1d1'
                }}></div>
                <div className='mx-2'>Or</div>
                <div style={{
                    height: '1px',
                    width: '150px',
                    backgroundColor: '#d1d1d1'
                }}></div>
            </div>
            <div className='signIn_option d-flex justify-content-evenly py-3'>
              <div onClick={()=>googleSignIn()} className='signIn_with_google'>
                   <img style={{height: '30px', width: '30px'}} src={google} alt='img'/>
                    &nbsp;
                   <small>Sign In with google</small>
              </div>
              <div onClick={facebookSignIn} className='signIn_with_google'>
                   <img style={{height: '30px', width: '30px'}} src={facebook} alt='img'/>
                    &nbsp;
                   <small>Sign In with facebook</small>
              </div>
              <div onClick={gitHubSignIn} className='signIn_with_google'>
                   <img style={{height: '30px', width: '30px'}} src={github} alt='img'/>
                   &nbsp;
                   <small>Sign In with github</small>
              </div>
            </div>
          </div>
    );
};
export default SocialLogin;
