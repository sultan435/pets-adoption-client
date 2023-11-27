import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const PrivateRoute = ({children}) => {
    const {user, isLoading} = useAuth()
    const location = useLocation()

    if(isLoading){
        return <p>loading......</p>
    }

    if(user){
        return children
    }

    return <Navigate to='/login' state={{from: location}}></Navigate>
};

export default PrivateRoute;