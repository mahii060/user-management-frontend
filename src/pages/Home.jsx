import { Link } from "react-router-dom";


const Home = () => {
    return (
        <>
            <div className="min-h-screen flex flex-col items-center justify-center space-y-8">
                <div
                    className="hero min-h-screen"
                    style={{
                        backgroundImage:
                            "url(https://img.freepik.com/free-photo/beautiful-miami-bayside-marketplace-scene_23-2151599610.jpg?t=st=1745908888~exp=1745912488~hmac=ee1275852806d26bc0f2a37105cf590fd19069111907504f89a9d08387c39b62&w=1380)",
                    }}
                >
                    <div className="hero-overlay"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-xl">
                            <h1 className="mb-5 text-5xl font-bold">Welcome to User Management System</h1>
                            <div className="bg-gray-950 bg-opacity-30 rounded-xl shadow-2xl">
                                <p className="p-5 mb-5 text-justify">
                                    A User Management Service Application allows administrators to create, view, update, and delete user profiles. It manages user authentication, roles, and access levels securely. This system helps streamline account handling, enhances security, and simplifies user data organization for web platforms, making it essential for scalable, user-focused applications or services.
                                </p>
                            </div>
                            <Link to="/users" className="btn btn-primary">Get Started</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;