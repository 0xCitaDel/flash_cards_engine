import { useLocation, Navigate, Outlet } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectCurrentToken } from "@features/auth/authSlice"

const PrivateRoute = () => {
    const token = useSelector(selectCurrentToken) || 
        localStorage.getItem('token')
    const location = useLocation()

    return (
        token
            ? <><Outlet /><div>Hello</div></>
            : <Navigate to="/login" state={{ from: location }} replace />
    )
}
export default PrivateRoute
