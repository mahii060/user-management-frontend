import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthContext';

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers)
    const { activeUser, } = useContext(AuthContext)

    const handleDelete = (_id) => {
        // console.log(user);

        Swal.fire({
            title: "Are you sure to delete this user?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            setUsers(prevUsers => prevUsers.filter(user => user._id !== _id))
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            })
                        }
                    })
            }
        });

    }
    return (
        <div>
            <h1 className="text-5xl text-red-600 text-center font-semibold font-mono underline">Users list</h1>
            {users.length > 0 &&
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className='bg-purple-400'>
                                <th>Sl no.</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>Creation Time</th>
                                <th>Last Sign In Time</th>
                                <th>Gender</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => <tr key={user._id} className={index % 2 === 0 ? "bg-purple-200" : "bg-gray-100"}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phoneNumber}</td>
                                <td>{user.creationTime}</td>
                                <td>{user.lastSignInTime}</td>
                                <td>
                                    {user.gender === 'male' ? <div className="badge badge-error">Male</div> : <div className="badge badge-accent">Female</div>}
                                </td>
                                <td>
                                    {(activeUser?.email === user.email) ? (<div className="badge badge-info">Active</div>) :
                                        (<div className="badge badge-error">Inactive</div>)
                                    }
                                </td>
                                <td className='md:space-x-2'>
                                    <button className='btn btn-info text-lg'>
                                        <FontAwesomeIcon icon={faPenToSquare} />
                                    </button>
                                    <button onClick={() => handleDelete(user._id, user)} className='btn btn-error text-lg'>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                </td>
                            </tr>)}

                        </tbody>
                    </table>
                </div>
            }
        </div>
    );
};

export default Users;