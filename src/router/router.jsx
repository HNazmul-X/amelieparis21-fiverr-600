<<<<<<< HEAD
import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import DashboardLayout from '../Dashboard/Components/DashboardLayout';
import CreateCardPage from '../pages/Create-card/CreateCardPage';
import FaqPage from '../pages/Faq-page/FaqPage';
import Login from '../pages/auth/Login';
import SignUp from '../pages/auth/SignUp';

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
                <Route index element={<h1>Welcome to Dashboard</h1>}/>
            </Route>
            
        </Routes>
    );
=======
import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import DashboardLayout from "../Dashboard/Components/DashboardLayout";
import CreateCardPage from "../pages/Create-card/CreateCardPage";
import FaqPage from "../pages/Faq-page/FaqPage";
import CardRequest from "./../Dashboard/CardRequeste/CardRequest";
import ProfileCreation from './../Dashboard/ProfileCreation/ProfileCreation';


const NavbarRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<h1>Hi Iam Home page</h1>} />
        <Route path=":id" element={<h1>Hi Iam abla page</h1>} />
        <Route path="about" element={<h1>Hi Iam about page</h1>} />
        <Route path="create-card" element={<CreateCardPage />} />
        <Route path="faq" element={<FaqPage />} />
      </Route>
      <Route path="/admin" element={<DashboardLayout />}>
        <Route index element={<ProfileCreation />} />
      </Route>
    </Routes>
  );
>>>>>>> b88e4fa166d0bbb4e0eff7018db1a5ac4f14c827
};

export default NavbarRouter;
