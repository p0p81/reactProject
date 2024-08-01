import { Navigate, Outlet } from "react-router-dom";
import { authContext } from "../context/authContext";
import { useContext } from "react";


export default function PrivacyGuard() {
    const {isAuthenticated} = useContext(authContext);

    return isAuthenticated
        ? <Outlet />
        : <Navigate to="/login" />
}