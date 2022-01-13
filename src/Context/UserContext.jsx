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

    const loginUser = (loggedInUser = {}, callback) => {
        if (!Object.values(loggedInUser).length > 0) {
            throw new Error("please provide new user Data to Login");
        }
        loggedInUser.isLoggedIn = true;
        const token = loggedInUser.token;
        if (token) {
            setUser({ ...loggedInUser });
            cookie.setCookie("token", token, 7);
            cookie.setCookie("userId", loggedInUser._id, 7);
            if (callback) {
                callback();
            }
        } else {
            loginUser();
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
        if (loggedInUser) {
            if (loggedInUser?.token?.length > 2) {
                loginUser(loggedInUser, () => navigate(location.pathname, { replace: true }));
            } else if (!loggedInUser.token) {
                logoutUser();
            }
        }
    }, []);

    const providerData = { user, setUser, loginUser, logoutUser };

    return <UserContextData.Provider value={{ ...providerData }}>{children}</UserContextData.Provider>;
};

export default UserContext;

export const useAuth = () => useContext(UserContextData);
