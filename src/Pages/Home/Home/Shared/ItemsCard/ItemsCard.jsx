import React, { useContext } from 'react';
import ButtonType from '../ButtonType/ButtonType';
import { AuthContext } from '../../../../../Auth/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import useCart from '../../../../../hooks/useCart';

const ItemsCard = ({ item }) => {
    const { name, image, recipe, _id, price } = item;
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [, refetch] = useCart();

    

    const handleCart= (food)=>{
        if(user && user.email){
            //send data to database
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                recipe,
                price
            }
            axios.post('http://localhost:8001/myCart', cartItem)
            .then(res=>{
                console.log(res.data);
                if(res.data.insertedId){
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Added to cart successfully',
                        showConfirmButton: false,
                        timer: 2000
                      })
                    refetch();
                }
            })
            .then(error=>{
                console.log(error);
            })
        }else{
            Swal.fire({
                title: 'Add to cart?',
                text: "Please login first!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Goto Login!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {state:{ from: location }});
                }
            })
        }
    }
    return (
        <div className='h-full'>
            <div className="max-w-sm ml-5  px-10 p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50 h-full">
                <img src={image} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                <div className="mt-6 mb-2 text-center space-y-3">
                    <span className="block  font-bold  tracki uppercase text-xl">{name}</span>
                    <h2 className="text-sm tracki">{recipe}</h2>
                </div>
                <div className='flex justify-center items-center mt-12'>
        <button onClick={()=>handleCart(item)} className="text-[#BB8506] bg-[#E8E8E8] rounded border-b-2 border-b-[#BB8506] px-10 py-2 hover:bg-[#1F2937]">ADD TO CART</button>
        </div>
            </div>
        </div>
    );
};

export default ItemsCard;