import React from 'react';
import MenuItem from '../../Pages/Home/Home/Shared/MenuItem/MenuItem';
import Cover from '../../Pages/Home/Home/Shared/Cover/Cover';
import ButtonType from '../../Pages/Home/Home/Shared/ButtonType/ButtonType';
import { Link } from 'react-router-dom';

const MenuCategory = ({item, title, coverImg, text}) => {
    return (
        <div className='my-24'>
           {
            title && <Cover 
            title={title}
            img ={coverImg}
            ></Cover>

           }
             <div className='max-w-5xl mx-auto grid md:grid-cols-2 gap-24 my-24'>
            {
                item.map((item, idx)=> <MenuItem
                key={idx}
                item={item}
                ></MenuItem>)
            }
           
            </div>
            <Link to={`/ourShop/${title}`}><ButtonType
            btnText={text}
            ></ButtonType></Link>
        </div>
    );
};

export default MenuCategory;