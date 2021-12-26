import React, { useState } from "react";
import { Outlet } from "react-router-dom";

const Navbar = () => {
    const [isNavbarShow, setIsNavbarShow] = useState(false);

    return (
        <>
            <nav class="hnazmul-navbar">
                <div class="hnazmul-navbar-container">
                    <div class="hnazmul-nav-brand">
                        <h4>Navbar brand</h4>
                    </div>
                    <div class="hnazmul-nav-toggle-btn" onClick={setIsNavbarShow.bind(this, true)}>
                        <button className="btn p-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30"  viewBox="0 0 1024 1024">
                                <path
                                    d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z"
                                    fill="currentColor"
                                />
                            </svg>
                        </button>
                    </div>

                    <div class={`hnazmul-navbar-content ${isNavbarShow ? "navbar-show" : ""}`}>
                        <div class="hnazmul-navbar-content-wrapper">
                            <ul class="navbar-list">
                                <li class="navbar-list-item">
                                    <a href="#" class="navbar-list-link">
                                        Home
                                    </a>
                                </li>
                                <li class="navbar-list-item">
                                    <a href="#" class="navbar-list-link">
                                        Feature
                                    </a>
                                </li>
                                <li class="navbar-list-item">
                                    <a href="#" class="navbar-list-link">
                                        Pricing
                                    </a>
                                </li>
                                <li class="navbar-list-item">
                                    <a href="#" class="navbar-list-link">
                                        About
                                    </a>
                                </li>
                            </ul>
                            <button class="navbar-closer-icon" onClick={setIsNavbarShow.bind(this, false)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width={30} viewBox="0 0 32 32">
                                    <path
                                        d="M7.219 5.781L5.78 7.22L14.563 16L5.78 24.781L7.22 26.22L16 17.437l8.781 8.782l1.438-1.438L17.437 16l8.782-8.781L24.78 5.78L16 14.563z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    );
};

export default Navbar;
