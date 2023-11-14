import React from 'react';

const ButtonType = ({btnText}) => {
    return (
        <div className='flex justify-center items-center mt-12'>
        <button className="text-[#BB8506] bg-[#E8E8E8] rounded border-b-2 border-b-[#BB8506] px-10 py-2 hover:bg-[#1F2937]">{btnText}</button>
        </div>
    );
};

export default ButtonType;