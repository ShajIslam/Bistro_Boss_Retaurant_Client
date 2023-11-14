import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../../../../../index.css'

const NavBar = () => {
 const links = <>
 
    <NavLink to={'/'} className='mr-3'><li>HOME</li></NavLink>
    <NavLink className='mr-3'><li>CONTACT US</li></NavLink>
    <NavLink className='mr-3'><li>DASHBOARD</li></NavLink>
    <NavLink to={'/menu'} className='mr-3'><li>OUR MENU</li></NavLink>
    <NavLink to={'/ourShop/salad'} className='mr-3'><li>OUR SHOP</li></NavLink>
    <NavLink to={'/login'} className='mr-3'><li>OUR SHOP</li></NavLink>
 
 </>

    return (
        <div>
            <div className="navbar fixed z-10 opacity-80 bg-black-300 text-white max-w-screen-xl px-10">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {
            links
        }
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">BISTRO BOSS</a>

  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {
        links
      }
    </ul>
  </div>
  
  <div className="navbar-end">
  <Link to={'/login'}>
    <button className="text-[#BB8506] bg-[#E8E8E8] rounded border-b-2 border-b-[#BB8506] px-10 py-2">Login</button>
    </Link>
  </div>
</div>
        </div>
    );
};

export default NavBar;