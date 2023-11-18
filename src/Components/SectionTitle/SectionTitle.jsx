import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div>
            <div className='max-w-sm mx-auto space-y-5 my-12'>
             <p className='text-center text-[#D99904] font-[Inter] font-light '>---{subHeading}---</p>
              <div>
              <hr />
              <h1 className='text-center text-4xl my-3'>{heading}</h1>
              <hr />
              </div>
             </div>
        </div>
    );
};

export default SectionTitle;