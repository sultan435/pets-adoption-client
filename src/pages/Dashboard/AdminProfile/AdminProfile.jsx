import useAuth from "../../../hooks/useAuth";


const AdminProfile = () => {
    const {user} = useAuth()
    return (
        <div>
            <h1 className="text-black">
                <span>Hi, Welcome {user?.displayName}</span>
            </h1>
        </div>
    );
};

export default AdminProfile;