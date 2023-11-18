import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../Home/Home/Shared/Cover/Cover';
import img from '../../assets/home/banner.jpg'
import PopularMenu from '../Home/Home/PopularMenu/PopularMenu';
import UseMenu from '../../hooks/UseMenu/UseMenu';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../../Components/MenuCategory/MenuCategory';
import desertBg from  '../../assets/menu/dessert-bg.jpeg'
import pizzaBg from  '../../assets/menu/pizza-bg.jpg'
import saladBg from  '../../assets/menu/salad-bg.jpg'
import soupBg from  '../../assets/menu/soup-bg.jpg'
import ButtonType from '../Home/Home/Shared/ButtonType/ButtonType';

const Menu = () => {
    const [menu] = UseMenu();


    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    const offered = menu.filter(item => item.category === 'offered')

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover 
            title={'OUR MENU'}
            img ={img}
            
            ></Cover>
             {/**MAIN COVER */}
             <SectionTitle
            heading={"TODAY'S OFFER"}
            subHeading={"Don't miss"}
            ></SectionTitle>
            {/**OFFERED MENU */}
            <MenuCategory
            item={offered}
            text={'ORDER YOUR FAVOURITE FOOD'}
            ></MenuCategory>
            
            {/**DESERTS ITEMS */}
            <MenuCategory
            item={dessert}
            title='desert'
            coverImg={desertBg}
            text={'ORDER YOUR FAVOURITE FOOD'}
            ></MenuCategory>
              
            {/**PIZZA MENU */}
            <MenuCategory
            item={pizza}
            title={'pizza'}
            coverImg={pizzaBg}
            text={'ORDER YOUR FAVOURITE FOOD'}
            ></MenuCategory>
              
            {/**SALAD MENU */}
            <MenuCategory
            item={salad}
            title={'salad'}
            coverImg={saladBg}
            text={'ORDER YOUR FAVOURITE FOOD'}
            ></MenuCategory>
            
            {/**SOUP MENU */}
            <MenuCategory
            item={soup}
            title={'soup'}
            coverImg={soupBg}
            text={'ORDER YOUR FAVOURITE FOOD'}
            ></MenuCategory>
             
        </div>
    );
};

export default Menu;