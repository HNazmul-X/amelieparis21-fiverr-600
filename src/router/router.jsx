import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import DashboardLayout from "../Dashboard/Components/DashboardLayout";
import CreateCardPage from "../pages/Create-card/CreateCardPage";
import FaqPage from "../pages/Faq-page/FaqPage";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import ProfileCreation from "../Dashboard/Pages/ProfileCreation/ProfileCreation";
import CardRequest from "../Dashboard/Pages/CardRequeste/CardRequest";
import AdminLogin from "../Dashboard/Auth/AdminLogin";
// import CardRequest from "./../Dashboard/CardRequeste/CardRequest";
// import ProfileCreation from './../Dashboard/ProfileCreation/ProfileCreation';
import Verification from '../pages/auth/Verification';

import PrivateRoute from "./PrivateRoute";

const NavbarRouter = () => {
    return (
        <Routes>
            {/* Admin Login */}
            <Route path="/admin/login" element={<AdminLogin />} />

            {/* Navbar Layout Router */}
            <Route path="/" element={<Navbar />}>
                <Route index element={<h1>Hi Iam Home page</h1>} />
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="verification" element={<Verification />} />
            </Route>
            <Route path="/admin" element={<DashboardLayout/>}>
                <Route index element={<h1>Welcome to Dashboard</h1>}/>
                <Route index element={<ProfileCreation />} />
            

                {/* navbar layout Private route */}
                <Route element={<PrivateRoute />}>
                    <Route path=":id" element={<h1>Hi Iam abla page</h1>} />
                    <Route path="about" element={<h1>Hi Iam about page</h1>} />
                    <Route path="create-card" element={<CreateCardPage />} />
                    <Route path="faq" element={<FaqPage />} />
                </Route>
                
            </Route>

            {/* Dashboard Layout Router */}
            <Route path="/admin" element={<DashboardLayout />}>
                <Route index element={<ProfileCreation />} />
                <Route path="table" element={<CardRequest />} />
            </Route>
        </Routes>
    );
};

export default NavbarRouter;
