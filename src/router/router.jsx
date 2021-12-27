import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import DashboardLayout from '../Dashboard/Components/DashboardLayout';
import CreateCardPage from '../pages/Create-card/CreateCardPage';
import FaqPage from '../pages/Faq-page/FaqPage';

const NavbarRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Navbar/>}>
                <Route index element={<h1>Hi Iam Home page</h1>}/>
                <Route path=":id" element={<h1>Hi Iam abla page</h1>}/>
                <Route path="about" element={<h1>Hi Iam about page</h1>}/>
                <Route path="create-card" element={<CreateCardPage/>}/>
                <Route path="faq" element={<FaqPage />}/>
            </Route>
            <Route path="/admin" element={<DashboardLayout/>}>
                <Route index element={<h1>Welcome to Dashboard</h1>}/>
            </Route>
            
        </Routes>
    );
};





export default NavbarRouter;