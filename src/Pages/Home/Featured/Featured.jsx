import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item  text-white bg-fixed pt-2 my-24">
            <SectionTitle
            heading={'FROM OUR MENU'}
            subHeading={'Check it out'}
            ></SectionTitle>
            <div className="md:flex justify-center items-center gap-10 px-12 pb-24 bg-slate-00">
                <div>
                    <img  src={featuredImg} alt="" />
                </div>
                <div className="space-y-3">
                    <p>March 20, 2023</p>
                    <h1>WHERE CAN I GET SOME?</h1>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                   <button className="text-[#BB8506] bg-[#E8E8E8] rounded border-b-2 border-b-[#BB8506] px-10 py-2 hover:bg-[#1F2937]"> ORDER NOW</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;