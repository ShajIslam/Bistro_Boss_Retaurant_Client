import React, { useState } from 'react';
import Cover from '../Home/Home/Shared/Cover/Cover';
import cover from '../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UseMenu from '../../hooks/UseMenu/UseMenu';
import ItemsCard from '../Home/Home/Shared/ItemsCard/ItemsCard';
import OrderTab from '../../Components/OrderTab/OrderTab';
import { useParams } from 'react-router-dom';

const OurShop = () => {
    const categories = ['salad', 'pizza', 'soup', 'desert', 'drink'];
    const {category} = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);

    const [menu] = UseMenu();

    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    const offered = menu.filter(item => item.category === 'offered')
    const drinks = menu.filter(item => item.category === 'drinks')


    return (
        <div>
            <Cover img={cover} title={'OUR SHOP'} ></Cover>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
               <div className='flex justify-center items-center my-12'>
               <TabList>
                    <Tab>SALAD</Tab>
                    <Tab>PIZZA</Tab>
                    <Tab>SOUPS</Tab>
                    <Tab>DESERTS</Tab>
                    <Tab>DRINKS</Tab>
                </TabList>
               </div>

                <TabPanel>
                <OrderTab item={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab item={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab item={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab item={dessert}></OrderTab>
                </TabPanel>
                <TabPanel className='mb-24'>
                <OrderTab item={drinks}></OrderTab>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default OurShop;