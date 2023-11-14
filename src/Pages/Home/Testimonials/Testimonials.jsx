import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating'
import { FaQuoteLeft } from 'react-icons/fa';
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className='my-24'>
            <SectionTitle
                heading={'TESTIMONIALS'}
                subHeading={'What Our Clients Say'}
            ></SectionTitle>
            <Swiper
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >

                {
                    reviews.map(review => <SwiperSlide
                        key={review.id}
                    >
                        <div className='flex flex-col items-center m-12 space-y-10 '>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <FaQuoteLeft className='text-6xl text-[#151515]'></FaQuoteLeft>
                            <p className='text-[#444]'>{review.details}</p>
                            <h1 className='text-2xl text-[#CD9003]'>{review.name}</h1>
                        </div>

                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Testimonials;