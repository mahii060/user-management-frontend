import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faArrowRightFromBracket, faUserPlus, faUsers, faUsersGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthContext';

const Navbar = () => {
    const { activeUser, userSignOut, setActiveUser } = useContext(AuthContext)

    const handleSignOut = () => {
        userSignOut()
            .then(() => {
                setActiveUser(null)
            }).catch((error) => {
                console.log(error);
            });

    }

    return (
        <div className="navbar bg-gray-200 shadow-sm">
            <div className="flex-1">
                <Link to="/">
                    <button className="btn  btn-soft btn-accent text-xl">
                        <FontAwesomeIcon icon={faUsersGear} /> User Management
                    </button>
                </Link>
            </div>
            <div className="md:flex-none">
                <ul className="menu menu-horizontal px-1 space-x-1">
                    <li>
                        {activeUser?.email && <p className='text-red-600 font-black text-center bg-blue-200'>{activeUser?.email}</p>}
                    </li>
                    <li>
                        <Link to="/users" className='btn btn-primary'>
                            <FontAwesomeIcon icon={faUsers} />
                            Users
                        </Link>
                    </li>
                    <li>
                        <Link to="/addUser" className='btn btn-success'>
                            <FontAwesomeIcon icon={faUserPlus} />
                            Add User
                        </Link>
                    </li>
                    <li>
                        <Link to="/profile" className='btn btn-accent'>
                            <FontAwesomeIcon icon={faUser} />
                            Profile
                        </Link>
                    </li>
                    <li>
                        <a onClick={handleSignOut} className='btn btn-error'>
                            <FontAwesomeIcon icon={faArrowRightFromBracket} />
                            Logout
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;