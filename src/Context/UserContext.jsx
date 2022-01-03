import React, { createContext, useContext, useState } from 'react';
import GetCookie from '../Util/Coockie';

export const UserContextData = createContext(null)

const UserContext = ({children}) => {

    const [user,setUser] = useState({
        isLoggedIn:false
    })
    const cookie = new GetCookie()


    const loginUser = (loggedInUser,callback) => {
        
        if(!loggedInUser){
           throw new Error("please provide new user Data to Login")
        }
        loggedInUser.isLoggedIn = true
        const token = loggedInUser.token; 
        setUser({...loggedInUser})
        cookie.setCookie("token",token,7)
        if(callback){
            callback()
            console.log(cookie.getCookie("token"));
        }
    }

    const logoutUser = (callback) => {
        const loggedOutUser = {}
        loggedOutUser.isLoggedIn = false;
        token = "";
        setUser({...loggedOutUser})
        cookie.deleteCookie("token")
        if(callback){
            callback()
        }

    } 



    const providerData = {user,setUser,loginUser,logoutUser}

    return (
        <UserContextData.Provider value={{...providerData}}>
            {children}
        </UserContextData.Provider>
    );
};

export default UserContext;


export const useAuth = () => useContext(UserContextData); 