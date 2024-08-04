import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "../context/authContext";

export default function PublicGuard() {
    const { isAuthenticated } = useContext(authContext);

    return !isAuthenticated
        ? <Outlet />
        : <Navigate to="/" />
}
