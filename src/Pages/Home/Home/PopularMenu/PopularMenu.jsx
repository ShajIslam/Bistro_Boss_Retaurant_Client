import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../../Components/SectionTitle/SectionTitle';
import MenuItem from '../Shared/MenuItem/MenuItem';
import UseMenu from '../../../../hooks/UseMenu/UseMenu';
import ButtonType from '../Shared/ButtonType/ButtonType';
import MenuCategory from '../../../../Components/MenuCategory/MenuCategory';

const PopularMenu = () => {
   
    const [menu] = UseMenu();

    const popularMenu = menu.filter(item => item.category === 'popular')


    return (
        <div>
            <SectionTitle
            heading={'FROM OUR MENU'}
            subHeading={'Check it out'}
            >

            </SectionTitle>

            <MenuCategory
            item={popularMenu}
            text={'VIEW FULL MENU'}
            ></MenuCategory>
           
        </div>
    );
};

export default PopularMenu;