import { AiFillDelete } from "react-icons/ai";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart";

import { RiDeleteBinLine } from "react-icons/ri";
import useAxiosSecure from "../../../hooks/UseMenu/useAxiosSecure";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../../Auth/AuthProvider/AuthProvider";




const Cart = () => {
    const [cart, refetch] = useCart();
    const {user} = useContext(AuthContext);
    let totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const axiosSecure = useAxiosSecure();
    


    const handleDelete= (_id)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

               axiosSecure.delete(`/carts/${_id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            refetch();
                              Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                              )
                           
                        }
                    })
            }
        })
    }


    return (
        <div className="w-[820px] p-10"> 
           <SectionTitle
           heading={'WANNA ADD MORE?'}
           subHeading={'My Cart'}
           ></SectionTitle>
          <div className=" ">
            <div className="flex justify-between my-10">
                <h1 className="text-3xl font-bold">Total orders: {cart.length}</h1>
                <h1 className="text-3xl font-bold">Total price: ${totalPrice}</h1>
                <button className="bg-[#D1A054] rounded py-2 px-5 text-white">Pay</button>
            </div>
          <table className="w-[750px] rounded ">
        <thead className=" bg-[#D1A054] rounded h-[70px]">
          <tr >
            <th></th>
            <th>Item Image</th>
            <th>Item Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {cart.map((item, index) => (
            <tr className="space-y-5 border-b-gray-500" key={index}>

             <td className="font-bold">{index+1}</td>
           
              <td className="flex justify-center rounded items-center">
                <img className="w-16 h-16 rounded" src={item.image} alt={`Item ${item.counter}`} />
              </td>
              <td className="text-[#737373] text-md">{item.name}</td>
              <td>{item.price}</td>
              <td>
                <button onClick={() => handleDelete(item._id)}> <RiDeleteBinLine className="text-white bg-red-700 text-8xl rounded w-10 h-10 p-2 font-light"></RiDeleteBinLine> </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
          </div>
        </div>
    );
};

export default Cart;