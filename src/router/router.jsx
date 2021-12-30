import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import DashboardLayout from '../Dashboard/Components/DashboardLayout';
import CreateCardPage from '../pages/Create-card/CreateCardPage';
import FaqPage from '../pages/Faq-page/FaqPage';
import Login from '../pages/auth/Login';
import SignUp from '../pages/auth/SignUp';
import ProfileCreation from "../Dashboard/Pages/ProfileCreation/ProfileCreation";
import CardRequest from '../Dashboard/Pages/CardRequeste/CardRequest';


const NavbarRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Navbar/>}>
                <Route index element={<h1>Hi Iam Home page</h1>}/>
                <Route path=":id" element={<h1>Hi Iam abla page</h1>}/>
                <Route path="about" element={<h1>Hi Iam about page</h1>}/>
                <Route path="create-card" element={<CreateCardPage/>}/>
                <Route path="faq" element={<FaqPage />}/>
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<SignUp />} />
            </Route>
            <Route path="/admin" element={<DashboardLayout/>}>
                <Route index element={<ProfileCreation/>}/>
                <Route path="table" element={<CardRequest/>}/>
            </Route>
            
        </Routes>
    )
};

export default NavbarRouter;
