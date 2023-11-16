import React, { useContext } from 'react';
import signUpImg from '../../assets/others/authentication2.png';
import signUpBg from '../../assets/others/authentication.png'
import { Link } from 'react-router-dom';
import SocialLogin from '../Login/SocialLogIn/SocialLogin';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Auth/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
import { Helmet } from 'react-helmet';

const SignUp = () => {
    const {createUser} = useContext(AuthContext);


    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => {
        console.log(data);
        createUser(data.email, data.password)
        .then(result =>{
            toast.success('Successfully Signed Up, Go to Login')
        })
        .catch(error=>{
            console.log(error.message);
            toast.error('Something wrong please try again')
        })
    };

    return (
        
        <section  style={{
            backgroundImage: `url('${signUpBg}')`,
            

        }} className="max-w-8xl mx-auto flex justify-center items-center">
            <Helmet>
            <title>Bistro Boss | Sign Up</title>
        </Helmet>
	<div className='shadow-2xl'>
    <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		
        <div className=" pb-24 ">
            
            <div className="w-[400px] flex flex-col justify-center px-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left ">
    
                <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className='text-5xl font-extrabold text-center '>Sign Up</h1>
                <div className="mb-6">
                  
                  <label className="block mb-2 text-sm font-light text-[#444] dark:text-white">Name</label>
                  <input type="text" {...register("name", {required: true})} name="name" className="shadow-sm rounded bg-gray-50 border border-gray-300 text-gray-900 text-sm  block w-full p-2.5  dark:shadow-sm-light" placeholder="Name" required />
                  {errors.name && <span className='text-red-700 my-2'>This field is required</span>}
              </div>
                    <div className="mb-6">
                  
                        <label className="block mb-2 text-sm font-light text-[#444] dark:text-white">Email</label>
                        <input type="email" {...register ("email", { required: true })} name="email" className="shadow-sm rounded bg-gray-50 border border-gray-300 text-gray-900 text-sm  block w-full p-2.5  dark:shadow-sm-light" placeholder="email" required />
                        {errors.email && <span className='text-red-700 my-2'>This field is required</span>}
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-light text-gray-900 dark:text-white">Password</label>
                        <input type="password" {...register("password", {
                            required: true,
                            minLength: 6,
                            maxLength: 20,
                            pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{6,20}$/
                            })} name="password" className="shadow-sm bg-gray-50 border rounded border-gray-300 text-gray-900 text-sm  block w-full p-2.5  dark:placeholder-gray-400 dark:text-white  dark:shadow-sm-light" placeholder="password" required />
                         {errors.password?.type === 'minLength' && <span className='text-red-700 my-2'>Password must be six characters</span>}
                         {errors.password?.type === 'maxLength' && <span className='text-red-700 my-2'>Password must be less than 20 characters</span>}
                         {errors.password?.type === 'pattern' && <span className='text-red-700 my-2'>Password must be one uppercase, one lowercase, one number, one special character</span>}
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