import React from 'react';
import ItemsCard from '../../Pages/Home/Home/Shared/ItemsCard/ItemsCard';

const OrderTab = ({item}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3'>
                {
                    item.map(item=> <ItemsCard
                    item={item}
                    ></ItemsCard>)
                  }
                </div>
    );
};

export default OrderTab;