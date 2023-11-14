
import { GrFacebookOption } from 'react-icons/gr';
import { AiOutlineGoogle } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";

const SocialLogin = () => {
    return (
        <div>
            <div className=" custom-gradient ">
    
    <div className="flex mt-4 space-x-5 sm:justify-center md:mt-0">
        <button  className='text-2xl w-9 h-9 rounded-full border border-gray-900'>
             
                <AiOutlineGoogle className='ml-1'></AiOutlineGoogle>

              <span className="sr-only">Google page</span>
          </button>
          <button className='text-2xl w-9 h-9 rounded-full border border-gray-900'>
              <GrFacebookOption className='ml-1'></GrFacebookOption>
              <span className="sr-only">Facebook community</span>
          </button>

          <button className='text-2xl w-9 h-9 rounded-full border border-gray-900'>
              <AiOutlineGithub className='ml-1'></AiOutlineGithub>
              <span className="sr-only">GitHub account</span>
          </button>
          
    </div>
</div>
            
        </div>
    );
};

export default SocialLogin;