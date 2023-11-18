import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import res from '../../assets/restuarant.png'
import { FaCalendar, FaHome, FaShoppingBag, FaShoppingCart, FaWallet } from 'react-icons/fa';
import { MdReviews } from "react-icons/md";
import { LuCalendarSearch } from "react-icons/lu";
import { AiFillContacts, AiOutlineMenu } from 'react-icons/ai';

const Dashboard = () => {
    return (
        <div className='flex'>
            <div className='w-64 min-h-screen bg-[#D1A054] mr-5 p-5'>
                <h1 className='text-3xl font-bold'>BISTRO BOSS</h1>
                <p className='tracking-[9px] font-bold text-2xl mb-10'>Restaurant</p>
                <ul className='space-y-5 mb-10'>
                    <li>
                        <NavLink className='text-md flex items-center'>
                            <FaHome className='mr-3 text-2xl'></FaHome>
                            USER HOME</NavLink>
                    </li>
                    <li>
                        <NavLink className='text-md flex items-center'>
                            <FaCalendar className='mr-3 text-2xl'></FaCalendar>
                            RESERVATION</NavLink>
                    </li>
                    <li>
                        <NavLink className='text-md flex items-center'>
                            <FaWallet className='mr-3 text-2xl'></FaWallet>
                            PAYMENT HISTORY</NavLink>
                    </li>
                    <li>
                        <NavLink className='text-md flex items-center'>
                            <FaShoppingCart className='mr-3 text-2xl'></FaShoppingCart>
                            MY CART</NavLink>
                    </li>
                    <li>
                        <NavLink className='text-md flex items-center'>
                            <MdReviews className='mr-3 text-2xl'></MdReviews>
                            ADD REVIEWS</NavLink>
                    </li>
                    <li>
                        <NavLink className='text-md flex items-center'>
                            <LuCalendarSearch className='mr-3 text-2xl'></LuCalendarSearch>
                            ONLINE BOOKINGS</NavLink>
                    </li>
                </ul>
                <hr />
                <ul className='space-y-5 mt-10'>
                    <li>
                        <NavLink to={'/'} className='text-md flex items-center'>
                            <FaHome className='mr-3 text-2xl'></FaHome>
                            HOME</NavLink>
                    </li>
                    <li>
                        <NavLink className='text-md flex items-center'>
                            <AiOutlineMenu className='mr-3 text-2xl'></AiOutlineMenu>
                            MENU</NavLink>
                    </li>
                    <li>
                        <NavLink className='text-md flex items-center'>
                            <FaShoppingBag className='mr-3 text-2xl'> </FaShoppingBag>
                            SHOP</NavLink>
                    </li>
                    <li>
                        <NavLink className='text-md flex items-center'>
                            <AiFillContacts className='mr-3 text-2xl'></AiFillContacts>
                            CONTACT US</NavLink>
                    </li>
                </ul>
            </div>
            <div className='max-w-5xl mx-auto'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;