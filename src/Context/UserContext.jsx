import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import GetCookie from "../Util/Coockie";

export const UserContextData = createContext(null);

const UserContext = ({ children }) => {
    const [user, setUser] = useState({});
    const cookie = new GetCookie();
    const Location = useLocation();
    const navigate = useNavigate();

    const loginUser = (loggedInUser, callback) => {
        if (!loggedInUser) {
            throw new Error("please provide new user Data to Login");
        }
        loggedInUser.isLoggedIn = true;
        const token = loggedInUser.token;
        setUser({ ...loggedInUser });
        cookie.setCookie("token", token, 7);
        if (callback) {
            callback();
        }
    };

    const logoutUser = (callback) => {
        setUser({});
        cookie.deleteCookie("token");
        navigate("/login", { replace: true });
        if (callback) {
            callback();
        }
    };

    useEffect(async () => {
        const {
            data: { user: loggedInUser },
        } = await axios.post("http://localhost:8080/api/auth/verify-token", {
            token: cookie.getCookie("token"),
        });
        console.log(loggedInUser);
        if (loggedInUser) {
            if (loggedInUser?.token?.length > 2) {
                loginUser(loggedInUser, () => navigate(Location.pathname, { replace: true }));
            } else {
                logoutUser();
            }
        } else {
            logoutUser();
        }
    }, []);

    const providerData = { user, setUser, loginUser, logoutUser };

    return <UserContextData.Provider value={{ ...providerData }}>{children}</UserContextData.Provider>;
};

export default UserContext;

export const useAuth = () => useContext(UserContextData);