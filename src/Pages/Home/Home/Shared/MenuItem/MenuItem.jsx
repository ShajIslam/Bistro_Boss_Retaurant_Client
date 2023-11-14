import React from 'react';

const MenuItem = ({item}) => {
    const {name, image, price, recipe}= item;
    return (
        <div className='flex space-x-4'>
            <img style={{
                borderRadius: '0px 200px 200px 200px'
            }} className='w-[180px] h-[104px]' src={image} alt=""/>
            <div className='space-y-2'>
                <h3 className='text-[#151515] font-light text-lg'>{name}------------------</h3>
                <p className='text-[#737373] '>{recipe}</p>
            </div>
            <div>
            <p className='text-[#BB8506] text-sm '>${price}</p>
            </div>
        </div>
    );
};

export default MenuItem;