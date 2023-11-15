import React from 'react';
import Home from '../Pages/Home/Home/Home';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Home/Home/Shared/Footer/Footer';
import NavBar from '../Pages/Home/Home/Shared/Navbar/NavBar';
import { Toaster } from 'react-hot-toast';

const Main = () => {
  const location = useLocation();
  console.log(location);
  const isLogin = location.pathname.includes('login');
  const isSignUp = location.pathname.includes('signUp');
    return (
        <div>
        {isLogin || isSignUp || <NavBar></NavBar>}
      
          <Outlet></Outlet>
          <Footer></Footer>
          <Toaster />
        </div>
    );
};

export default Main;