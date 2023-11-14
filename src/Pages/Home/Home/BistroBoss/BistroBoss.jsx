import img from '../../../../assets/home/chef-service.jpg'

const BistroBoss = () => {
    return (
        <div className='max-w-6xl mx-auto my-24'>

                <img className='relative' src={img} alt="" />
                <div className='max-w-3xl bottom-[-174%] py-16 ml-48 px-10 space-y-3 absolute bg-white '><h1 className='text-4xl font-light text-center'>BISTRO BOSS</h1>
                    <p className='text-center text-sm'>Bistro Boss: Where Culinary Excellence Meets Ambiance! Indulge your senses in a symphony of flavors crafted with passion. Our menu is a journey through delectable delights, each dish a masterpiece. From cozy dinners to celebratory feasts, Bistro Boss sets the stage for unforgettable moments. Join us and elevate your dining experience to a new level of exquisite taste and sophistication!</p>
                </div>
        </div>
    );
};

export default BistroBoss;