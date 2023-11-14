import React from 'react';
import ButtonType from '../ButtonType/ButtonType';

const ItemsCard = ({ item }) => {
    const { name, image, recipe } = item;
    return (
        <div className='h-full'>
            <div className="max-w-sm ml-5  px-10 p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50 h-full">
                <img src={image} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                <div className="mt-6 mb-2 text-center space-y-3">
                    <span className="block  font-bold  tracki uppercase text-xl dark:text-violet-400">{name}</span>
                    <h2 className="text-sm tracki">{recipe}</h2>
                </div>
                <ButtonType
                    btnText={'ADD TO CART'}
                ></ButtonType>
            </div>
        </div>
    );
};

export default ItemsCard;