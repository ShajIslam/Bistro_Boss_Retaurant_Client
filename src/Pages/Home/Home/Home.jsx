import React from 'react';
import Banner from '../Banner/Banner';
import Category from './Category/Category';
import BistroBoss from './BistroBoss/BistroBoss';
import PopularMenu from './PopularMenu/PopularMenu';
import CallUs from './CallUs/CallUs';
import ChefRecommends from './ChefRecommeds/ChefRecommends';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
             <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
           <Banner></Banner>
           <Category></Category>
           <BistroBoss></BistroBoss>
           <PopularMenu></PopularMenu>
           <CallUs></CallUs>
           <ChefRecommends></ChefRecommends>
           <Featured></Featured>
           <Testimonials></Testimonials>
        </div>
    );
};

export default Home;