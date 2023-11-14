import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
import { Pagination } from 'swiper/modules';
import img1 from '../../../../assets/home/slide1.jpg'
import img2 from '../../../../assets/home/slide2.jpg'
import img3 from '../../../../assets/home/slide3.jpg'
import img4 from '../../../../assets/home/slide4.jpg'
import img5 from '../../../../assets/home/slide5.jpg'
import SectionTitle from '../../../../Components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <div>
            
           <SectionTitle
           heading={'ORDER ONLINE'}
           subHeading={'From 11:00am to 10:00pm'}
           ></SectionTitle>
             
            
             <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-24"

      >
        
        <SwiperSlide>
      
            <img className='relative' src={img1} alt="" />
            <h1 className='absolute top-[85%] text-4xl font-light text-white upercase'>SALADS</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img className='relative' src={img2} alt="" />
            <h1 className='absolute top-[85%] text-4xl font-light text-white upercase'>PIAZZAS</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img className='relative' src={img3} alt="" />
            <h1 className='absolute top-[85%] text-4xl font-light text-white upercase'>SOUPS</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img className='relative' src={img4} alt="" />
            <h1 className='absolute top-[85%] text-4xl font-light text-white upercase'>DESSERTS</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img className='relative' src={img5} alt="" />
            <h1 className='absolute top-[85%] text-4xl font-light text-white upercase'>SALADS</h1>
        </SwiperSlide>
       
        
      </Swiper>
        </div>
    );
};

export default Category;