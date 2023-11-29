import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import Loading from "../components/Ui/Loading";


const AdminRoute = ({ children }) => {
    const { user, isLoading } = useAuth()
    const [isAdmin, isAdminPending] = useAdmin()
    const location = useLocation()

    if (isLoading || isAdminPending) {
        return <Loading></Loading>
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to='/' state={{ from: location }} replace></Navigate>
};

export default AdminRoute;