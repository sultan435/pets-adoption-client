import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loading from "../components/Ui/Loading";


const PrivateRoute = ({children}) => {
    const {user, isLoading} = useAuth()
    const location = useLocation()

    if(isLoading){
        return <Loading></Loading>
    }

    if(user){
        return children
    }

    return <Navigate to='/login' state={{from: location}}></Navigate>
};

export default PrivateRoute;