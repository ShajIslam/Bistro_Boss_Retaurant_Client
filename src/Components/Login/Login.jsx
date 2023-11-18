import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './style.css'
import loginImg from '../../assets/others/authentication2.png';
import loginBg from '../../assets/others/authentication.png'
import SocialLogin from './SocialLogIn/SocialLogin';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Auth/AuthProvider/AuthProvider';


const Login = () => {

    const capcha = useRef(null);
    const [disabled, setDisabled] = useState(true);
    const {signIn} = useContext(AuthContext);
    

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";


    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])

    const handleValidate= () =>{
        const user_captcha_value = capcha.current.value;
        if(validateCaptcha(user_captcha_value)){
            toast.success('Validation Successfully!')
            setDisabled(false);

        }else{
            toast.error('Wrong Captcha try again')
            setDisabled(true);
        }
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        signIn(email, password)
        .then(result=>{
            toast.success('Logged in successfully')
            navigate(from, { replace: true });

        })
        .then(error=>{
            console.log(error);
        })

    }

    return (

        <section  style={{
            backgroundImage: `url('${loginBg}')`

        }} className="max-w-8xl mx-auto flex justify-center items-center">
	<div className='shadow-2xl'>
    <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex items-centerjustify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src={loginImg} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
		<div className="w-full flex flex-col justify-center px-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
        <div className=" pb-24 ">
            

            <div className="max-w-lg mx-auto mb-12  px-10 rounded custom-gradient ">
    
                <form onSubmit={handleSubmit}>
                <h1 className='text-5xl font-extrabold text-center '>Login</h1>
                    <div className="mb-6">
                  
                        <label className="block mb-2 text-sm font-light text-[#444] dark:text-white">Email</label>
                        <input type="email" name="email" className="shadow-sm rounded bg-gray-50 border border-gray-300 text-gray-900 text-sm  block w-full p-2.5  dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light" placeholder="email" required />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-light text-gray-900 dark:text-white">Password</label>
                        <input type="password" name="password" className="shadow-sm bg-gray-50 border rounded border-gray-300 text-gray-900 text-sm  focus:ring-blue-500  block w-full p-2.5  dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light" placeholder="password" required />
                        {/* {
                            error ? <p className="p-2 text-red-800">{error}</p> : ''
                        } */}
                    </div>
                    
              <div className="mb-6">
                  
                  <label className='block mb-2 text-sm font-light text-gray-900'>
                  <LoadCanvasTemplate />
                  </label>

                  <input onBlur={handleValidate} type="text" ref={capcha} name="capcha" className="shadow-sm rounded bg-gray-50 border border-gray-300 text-gray-900 text-sm  block w-full p-2.5  dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light" placeholder="type here" required />
                  
              </div>
    
                    <div className="text-center mt-12 ">
                        <button type="submit" disabled={disabled} className=" w-full rounded text-white bg-[#D1A054B3] hover:bg-yellow-500 font-medium  text-sm px-5 py-2.5 text-center ">Sign In</button>
                    </div>
                    <h1 className="text-center text-[#D1A054B3] mt-5 text-sm font-light mb-5">New User? <Link className="underline font-bold" to={'/signUp'}>Create a New Account</Link></h1>
    
                    <div>
                        <h1 className="mb-5 text-center font-light">or sign in with</h1>
                       <SocialLogin></SocialLogin>
                    </div>
    
                </form>
    
            </div>
    
        </div>
		</div>
	</div>
    </div>
</section>
       
    );
};

export default Login;