import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import DashboardLayout from "../Dashboard/Components/DashboardLayout";
import CreateCardPage from "../pages/Create-card/CreateCardPage";
import FaqPage from "../pages/Faq-page/FaqPage";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import ProfileRequest from "../Dashboard/Pages/ProfileRequest/ProfileRequest";
import CardRequest from "../Dashboard/Pages/CardRequeste/CardRequest";
import AdminLogin from "../Dashboard/Auth/AdminLogin";
import Verification from "../pages/auth/Verification";
// import CardRequest from "./../Dashboard/CardRequeste/CardRequest";

import PrivateRoute from "./PrivateRoute";
import CardStatus from "../pages/Create-card/CardStatus";
import Successfully from "../pages/auth/Successfully";
import AllCard from "../Dashboard/Pages/CardRequeste/subpages/AllCard/AllCard";
import SingleCardPreview from "../Dashboard/Pages/CardRequeste/Releted/SingleCardPreview";
import AllRequest from "../Dashboard/Pages/ProfileRequest/Subpages/AllRequest/AllRequest";
import ProfileCreation from "../Dashboard/Pages/ProfileRequest/Subpages/ProfileCreation/ProfileCreation";
import PlayGround from "../pages/playgournd/playground";
import HomePage from "./../pages/Home-page/HomePage";
import ProfilePage from "../pages/Profile/ProfilePage";
import ResetPwd from "../pages/auth/ResetPwd";
import ResetPwdVerification from "../pages/auth/ResetPwdVerification";
import NewPwd from "../pages/auth/NewPwd";
import AdminPrivateRoute from "./AdminPrivateRoute";

const NavbarRouter = () => {
    return (
        <Routes>
            {/* Admin Login */}

            {/* Navbar Layout Router */}
            <Route path="/" element={<Navbar />}>
                <Route index element={<HomePage />} />
                <Route path="/playground" element={<PlayGround />} />
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="/verify-profile/:verificationId/:code/:userId" element={<Verification />} />
                <Route path="/successfully-profile/:successfullyId" element={<Successfully />} />
                <Route path="/profile/:userId" element={<ProfilePage />} />
                <Route path="/reset-pwd" element={<ResetPwd />} />
                <Route path="/reset-pwd-code/:verificationId/:code/:userId" element={<ResetPwdVerification />} />
                <Route path="/new-pwd/:verificationId/:code/:userId" element={<NewPwd />} />
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
                <Route path="login" element={<AdminLogin />} />

                {/* private route for only admin */}
                <Route element={<AdminPrivateRoute />}>
                    <Route path="profile-request/" element={<ProfileRequest />}>
                        <Route path="all-user-profile" element={<AllRequest />} />
                        <Route path="profile-creation/:profileId" element={<ProfileCreation />} />
                    </Route>

                    <Route path="card-request/" element={<CardRequest />}>
                        <Route path="all/" element={<AllCard />} />
                        <Route path="preview/:cardId" element={<SingleCardPreview />} />
                    </Route>
                </Route>
            </Route>
        </Routes>
    );
};

export default NavbarRouter;
