import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
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
            
        </Routes>
    );
};





export default NavbarRouter;