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
import Verification from "../pages/auth/Verification";
// import CardRequest from "./../Dashboard/CardRequeste/CardRequest";

import PrivateRoute from "./PrivateRoute";
import CardStatus from "../pages/Create-card/CardStatus";
import Successfully from "../pages/auth/Successfully";

const NavbarRouter = () => {
    return (
        <Routes>
            {/* Admin Login */}

            {/* Navbar Layout Router */}
            <Route path="/" element={<Navbar />}>
                <Route index element={<h1>Hi Iam Home page</h1>} />
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="/verify-profile/:verificationId" element={<Verification />} />
                <Route path="/successfully-profile/:successfullyId" element={<Successfully />} />
                {/* navbar layout Private route */}
                <Route element={<PrivateRoute />}>
                    <Route path=":id" element={<h1>Hi Iam abla page</h1>} />
                    <Route path="about" element={<h1>Hi Iam about page</h1>} />
                    <Route path="create-card" element={<CreateCardPage />} />
                    <Route path="/card-status/:cardId" element={<CardStatus />} />
                    <Route path="faq" element={<FaqPage />} />
                </Route>
            </Route>

            {/* Dashboard Layout Router */}
            <Route path="/admin" element={<DashboardLayout />}>
                <Route index element={<ProfileCreation />} />
                <Route path="table" element={<CardRequest />} />
                <Route path="login" element={<AdminLogin />} />
            </Route>
        </Routes>
    );
};

export default NavbarRouter;
