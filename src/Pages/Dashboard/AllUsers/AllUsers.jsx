import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/UseMenu/useAxiosSecure";
import { RiDeleteBinLine } from "react-icons/ri";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaUser, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import useUsers from "../../../hooks/UseMenu/useUsers";
import { AuthContext } from "../../../Auth/AuthProvider/AuthProvider";


const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const [users, refetch] = useUsers();
    const {user} = useContext(AuthContext);

    const handleAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${user.name} admin now`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch();
                }
            })
    }

    const handleDelete = (_id) => {
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

                axiosSecure.delete(`/users/${_id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Users has been deleted',
                                'success'
                            )

                        }
                    })
            }
        })
    }

    return (
        <div>
            <div className="w-[820px] p-10">
                <SectionTitle
                    heading={'MANAGE ALL USERS'}
                    subHeading={'How many??'}
                ></SectionTitle>
                <div className=" ">
                    <h1 className="text-3xl font-bold mb-10">TOTAL USERS: {users.length}</h1>

                    <table className="w-[750px] rounded ">
                        <thead className=" bg-[#D1A054] rounded h-[70px]">
                            <tr >
                                <th></th>
                                <th>NAME</th>
                                <th>EMAIL</th>
                                <th>ROLE</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {users.map((user, index) => (
                                <tr className="space-y-5 border-b-gray-500" key={index}>

                                    <td className="font-bold">{index + 1}</td>

                                    <td>
                                        {user.name}
                                    </td>
                                    <td className="text-[#737373] text-md">{user.email}</td>
                                    <td className="flex justify-center items-center">
                                        {
                                            user.role === 'admin'? 'ADMIN' : <button onClick={()=>handleAdmin(user)}>
                                            <FaUsers className="text-2xl bg-[#D1A054] rounded hover:bg-black w-10 h-10 p-2 text-white"></FaUsers>
                                        </button>
                                        }
                                    </td>
                                    <td>

                                        <button onClick={() => handleDelete(user._id)}> <RiDeleteBinLine className="text-white bg-red-700 text-8xl rounded w-10 h-10 p-2 font-light"></RiDeleteBinLine> </button>

                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;