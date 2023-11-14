import React from 'react';
import signUpImg from '../../assets/others/authentication2.png';
import signUpBg from '../../assets/others/authentication.png'
import { Link } from 'react-router-dom';
import SocialLogin from '../Login/SocialLogIn/SocialLogin';

const SignUp = () => {
    return (
        <section  style={{
            backgroundImage: `url('${signUpBg}')`,
            

        }} className="max-w-8xl mx-auto flex justify-center items-center">
	<div className='shadow-2xl'>
    <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		
        <div className=" pb-24 ">
            
            <div className="w-[400px] flex flex-col justify-center px-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left ">
    
                <form >
                <h1 className='text-5xl font-extrabold text-center '>Sign Up</h1>
                    <div className="mb-6">
                  
                        <label className="block mb-2 text-sm font-light text-[#444] dark:text-white">Email</label>
                        <input type="email" name="email" className="shadow-sm rounded bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="email" required />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-light text-gray-900 dark:text-white">Password</label>
                        <input type="password" name="password" className="shadow-sm bg-gray-50 border rounded border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="password" required />
                        {/* {
                            error ? <p className="p-2 text-red-800">{error}</p> : ''
                        } */}
                    </div>
                    <div className="mb-6">
                  
                 
                  <input type="email" name="email" className="shadow-sm rounded bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="capcha" required />
              </div>
              <div className="mb-6">
                  
                  
                  <input type="email" name="email" className="shadow-sm rounded bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="type here" required />
              </div>
    
    
    
                    
    
                    <div className="text-center mt-12 ">
                        <button type="submit" className=" w-full rounded text-white bg-[#D1A054B3] hover:bg-[#D1A054B3] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 text-center dark:bg-[#D1A054B3] dark:hover:bg-[#D1A054B3] ">Sign In</button>
                    </div>
                    <h1 className="text-center text-[#D1A054B3] mt-5 text-sm font-light mb-5">Already registered? <Link className="underline font-bold" to={'/login'}>Go to log in</Link></h1>
    
                    <div>
                        <h1 className="mb-5 text-center font-light">or sign in with</h1>
                       <SocialLogin></SocialLogin>
                    </div>
    
                </form>
    
            </div>
    
        </div>
		<div className=" max-w-lg mx-auto mb-12  px-10 rounded custom-gradient">
        <div className="flex items-centerjustify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src={signUpImg} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
		</div>
	</div>
    </div>
</section>
    );
};

export default SignUp;