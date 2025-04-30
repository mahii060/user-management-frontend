import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthContext';
import { Link } from 'react-router-dom';

const Profile = () => {
    const { activeUser } = useContext(AuthContext)
    const gmtTime = activeUser?.metadata.lastSignInTime;
    const date = new Date(gmtTime);
    const localTime = date.toLocaleString();
    // console.log(activeUser);
    return (
        <div>
            <h1 className="text-center text-4xl">Profile Here</h1>
            <div className='flex justify-center items-center'>
                {activeUser &&
                    <div className="card w-96 bg-blue-100 card-md shadow-2xl">
                        <div className="card-body">
                            <h2 className="card-title">{activeUser?.email}</h2>
                            <p className='text-2xl font-semibold'>Last Sign in: <span className='text-lg text-blue-700'>{localTime}</span></p>
                            <div className="justify-center card-actions">
                                <Link to="/users">
                                    <button className="btn btn-primary">Go To Users</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default Profile;