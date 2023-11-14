import React, { useEffect, useState } from 'react';
import ItemsCard from '../Shared/ItemsCard/ItemsCard';
import SectionTitle from '../../../../Components/SectionTitle/SectionTitle';
import UseMenu from '../../../../hooks/UseMenu/UseMenu';

const ChefRecommends = () => {

   
    const [menus] = UseMenu();

    
    return (
        <div>
            <SectionTitle
            heading={'CHEF RECOMMENDS'}
            subHeading={'Should Try'}
            ></SectionTitle>
            <div className='grid md:grid-cols-3'>
            {
                menus.slice(0,9).map((item, idx)=> <ItemsCard
                key={idx}
                item={item}
                ></ItemsCard>)
            }
            </div>
        </div>
    );
};

export default ChefRecommends;