import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../../../../../index.css'
import { AuthContext } from '../../../../../Auth/AuthProvider/AuthProvider';
import { TiShoppingCart } from "react-icons/ti";
import { FaShoppingCart } from "react-icons/fa";
import useCart from '../../../../../hooks/useCart';

const NavBar = () => {

  const {user, logOut} = useContext(AuthContext);
  const [cart] = useCart();

  
  const handleLogout =()=>{
        return logOut()
           
  }

 const links = <>
 
    <NavLink to={'/'} className='mr-3'><li>HOME</li></NavLink>
    {/* <NavLink className='mr-3'><li>CONTACT US</li></NavLink>
    <NavLink className='mr-3'><li>DASHBOARD</li></NavLink> */}
    <NavLink to={'/menu'} className='mr-3'><li>MENU</li></NavLink>
    <NavLink to={'/ourShop/salad'} className='mr-3'><li>SHOP</li></NavLink>
   <NavLink to={'/dashboard/cart'}>
   <div className="indicator mr-7">
  <span className="indicator-item badge badge-secondary bg-red-700">+{cart.length}</span> 
  <FaShoppingCart className='text-2xl mr-2'></FaShoppingCart>
</div>
   </NavLink>
    {/* <NavLink to={'/secret'} className='mr-3'><li>Secret</li></NavLink> */}
 
 </>

    return (
        <div>
            <div className="navbar fixed z-10 opacity-75 bg-black text-white max-w-screen-xl px-10">
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
  
  
  <div className="navbar-end">
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {
        links
      }
    </ul>
  </div>

  {user ? (
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user.photoURL} alt="user avatar" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52">
                            <li className="font-bold ml-3">{user.displayName}</li>
                            <li><a onClick={handleLogout}>Logout</a></li>
                        </ul>
                    </div>
                ) : (
                        <Link to={'/login'}>
                            <button className="text-[#BB8506] bg-[#E8E8E8] rounded border-b-2 border-b-[#BB8506] px-10 py-2">Login</button>
                        </Link>
                    )} 
  </div>
</div>
        </div>
    );
};

export default NavBar;