import { useEffect, useState } from "react";
import { Link as PageLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "../../assets/images/Asset 1.svg";
import { Outlet } from "react-router-dom";
import MyModal from "./../MyModal/MyModal";
import { useAuth } from "../../Context/UserContext";
import { InlineIcon } from "@iconify/react";

const btnVariants = {
    hover: {
        scale: 1.1,
        transition: {
            yoyo: Infinity,
        },
    },
};

function MyNavBar() {
    const [sidebar, setSidebar] = useState(false);
    const [navbar, setNavbar] = useState(false);
    const auth = useAuth();
    const navigate = useNavigate();

    const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "-100%" },
    };

    const changeBackground = () => {
        if (window.scrollY >= 40) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeBackground);
    }, []);

    const handelOpenModal = () => {
        const modal = document.getElementById("myModal");
        modal.classList.toggle("d-none");
    };
    const handelClose = () => {
        const modal = document.getElementById("myModal");
        modal.classList.toggle("d-none");
    };
    return (
        <>
            <div id="homepage" className="onecardPro_navbar">
                <motion.div initial={{ position: "relative" }} style={{ transition: "1s" }} animate={navbar ? { position: "fixed", top: 0 } : { position: "relative" }} className="z-30 w-full">
                    <div className={navbar ? "stickyNavbarStyles z-50" : "flex bg-oneCard-lightGray items-center justify-between w-full py-6 px-8 sm:px-16 z-50"}>
                        <PageLink to="/" className="flex items-center space-x-3 cursor-pointer">
                            <img src={Logo} alt="One Card Pro" className="w-16 md:w-20" />
                        </PageLink>
                        <div className="items-center self-center hidden space-x-4 lg:flex text-oneCard-darkBlue place-self-center justify-self-center">
                            <PageLink to="/" className="navLink">
                                Home
                            </PageLink>
                            {auth?.user?.isAdmin ? (
                                <PageLink to="/admin" className="navLink">
                                    Dashboard
                                </PageLink>
                            ) : (
                                <PageLink to={`/u/${auth?.user?.username}`} className="navLink">
                                    Profile
                                </PageLink>
                            )}
                            <PageLink to="#" className="navLink" onClick={() => handelOpenModal()}>
                                Comparability
                            </PageLink>
                            <PageLink to="/create-card" className="navLink">
                                Crate Card
                            </PageLink>
                        </div>
                        <div className="flex text-[#5C637C] items-center space-x-3">
                            {!auth?.user?.isLoggedIn ? (
                                <>
                                    {" "}
                                    <motion.div variants={btnVariants} initial={{ scale: 0.3 }} animate={{ scale: 1 }} whileHover="hover" whileTap={{ scale: 0.9 }}>
                                        <PageLink
                                            to="/login"
                                            className="w-full d-none d-lg-block py-2  text-lg font-medium text-center rounded-full cursor-pointer px-7 text-oneCard-lightGray focus:outline-none hover:shadow-lg bg-oneCard-darkBlue"
                                            onClick={() => setSidebar(false)}>
                                            Login
                                        </PageLink>
                                    </motion.div>
                                    <motion.div variants={btnVariants} initial={{ scale: 0.3 }} animate={{ scale: 1 }} whileHover="hover" whileTap={{ scale: 0.9 }}>
                                        <PageLink
                                            to="/signup"
                                            className="w-full d-none d-lg-block py-2 text-lg font-medium text-center rounded-full cursor-pointer px-7 text-oneCard-lightGray focus:outline-none hover:shadow-lg bg-oneCard-darkBlue"
                                            onClick={() => setSidebar(false)}>
                                            Crate Account
                                        </PageLink>
                                    </motion.div>
                                </>
                            ) : (
                                <>
                                    <motion.div variants={btnVariants} initial={{ scale: 0.3 }} animate={{ scale: 1 }} whileHover="hover" whileTap={{ scale: 0.9 }}>
                                        <button
                                            className="w-full  d-lg-block d-none py-2 text-lg font-medium text-center rounded-full cursor-pointer px-7 text-oneCard-lightGray focus:outline-none hover:shadow-lg bg-oneCard-darkBlue"
                                            onClick={() => {
                                                navigate("create-card");
                                            }}>
                                            Create Card
                                        </button>
                                    </motion.div>
                                    <motion.div variants={btnVariants} initial={{ scale: 0.3 }} animate={{ scale: 1 }} whileHover="hover" whileTap={{ scale: 0.9 }}>
                                        <PageLink
                                            to="/login"
                                            className="w-full  d-lg-block d-none py-2 text-lg font-medium text-center rounded-full cursor-pointer px-7 text-oneCard-lightGray focus:outline-none hover:shadow-lg bg-oneCard-darkBlue"
                                            onClick={() => {
                                                setSidebar(false);
                                                auth?.logoutUser();
                                            }}>
                                            Logout
                                        </PageLink>
                                    </motion.div>
                                    <PageLink to={`/profile-creation/${auth?.user?.profile}`} title="Edit Profile Template">
                                        <div className="d-flex flex-column align-items-center ">
                                            <InlineIcon icon={"fluent:document-edit-20-regular"} className="fs-3" />
                                            <p className="mb-0 small">Edit Profile</p>
                                        </div>
                                    </PageLink>
                                </>
                            )}
                            <motion.button
                                variants={btnVariants}
                                initial={{ scale: 0.3 }}
                                animate={{ scale: 1 }}
                                whileHover="hover"
                                whileTap={{ scale: 0.9 }}
                                className="lg:hidden bg-white border border-transparent hover:shadow-md  focus:outline-none font-medium text-oneCard-darkBlue p-3.5 rounded-xl text-xl"
                                onClick={() => setSidebar(true)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 1024 1024">
                                    <path
                                        d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </motion.button>
                        </div>
                    </div>

                    <motion.div className="fixed top-0 z-50 flex items-center w-full h-screen lg:hidden" initial={{ opacity: 0, x: "-100%" }} animate={sidebar ? "open" : "closed"} variants={variants}>
                        <div className="flex flex-col items-center h-screen px-4 overflow-y-scroll shadow-2xl w-80 sm:w-96 hide-scrollbar bg-opacity-60 backdrop-filter backdrop-blur-md bg-oneCard-lightGray">
                            <div className="flex items-center justify-between w-full py-8">
                                <div className="flex items-center space-x-2">
                                    <img src={Logo} alt="Nikunj Thesiya" className="w-10 sm:w-16" />
                                </div>

                                <motion.button
                                    variants={btnVariants}
                                    initial={{ scale: 0.3 }}
                                    animate={{ scale: 1 }}
                                    whileHover="hover"
                                    whileTap={{ scale: 0.9 }}
                                    className="lg:hidden bg-oneCard-darkBlue hover:shadow-md focus:outline-none font-medium text-oneCard-lightGray p-3.5 rounded-xl text-xl"
                                    onClick={() => setSidebar(false)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={30} viewBox="0 0 32 32">
                                        <path
                                            d="M7.219 5.781L5.78 7.22L14.563 16L5.78 24.781L7.22 26.22L16 17.437l8.781 8.782l1.438-1.438L17.437 16l8.782-8.781L24.78 5.78L16 14.563z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </motion.button>
                            </div>

                            {/* Mobile First Menu */}
                            <div className="flex flex-col items-center w-full py-5 space-y-2">
                                <PageLink to="/" className="sidebar-link" onClick={() => setSidebar(false)}>
                                    Home
                                </PageLink>
                                {auth?.user?.isAdmin ? (
                                    <PageLink to="/admin" className="navLink">
                                        Dashboard
                                    </PageLink>
                                ) : (
                                    <PageLink to={`/u/${auth?.user?.username}`} className="navLink">
                                        Profile
                                    </PageLink>
                                )}
                                <PageLink to="#" className="sidebar-link" onClick={() => setSidebar(false)}>
                                    Compatibility
                                </PageLink>
                                <PageLink to="/create-card" className="sidebar-link" onClick={() => setSidebar(false)}>
                                    Create Card
                                </PageLink>
                            </div>

                            <div className="flex flex-col items-center space-y-10">
                                {!auth?.user?.isLoggedIn ? (
                                    <>
                                        {" "}
                                        <motion.div variants={btnVariants} initial={{ scale: 0.3 }} animate={{ scale: 1 }} whileHover="hover" whileTap={{ scale: 0.9 }}>
                                            <PageLink
                                                to="/login"
                                                className="w-full py-3  text-lg font-medium text-center rounded-full cursor-pointer px-7 text-oneCard-lightGray focus:outline-none hover:shadow-lg bg-oneCard-darkBlue"
                                                onClick={() => setSidebar(false)}>
                                                Login
                                            </PageLink>
                                        </motion.div>
                                        <motion.div variants={btnVariants} initial={{ scale: 0.3 }} animate={{ scale: 1 }} whileHover="hover" whileTap={{ scale: 0.9 }}>
                                            <PageLink
                                                to="/signup"
                                                className="w-full py-3  text-lg font-medium text-center rounded-full cursor-pointer px-7 text-oneCard-lightGray focus:outline-none hover:shadow-lg bg-oneCard-darkBlue"
                                                onClick={() => setSidebar(false)}>
                                                Signup
                                            </PageLink>
                                        </motion.div>
                                    </>
                                ) : (
                                    <>
                                        <motion.div variants={btnVariants} initial={{ scale: 0.3 }} animate={{ scale: 1 }} whileHover="hover" whileTap={{ scale: 0.9 }}>
                                            <button
                                                className="w-full  py-2 text-lg font-medium text-center rounded-full cursor-pointer px-7 text-oneCard-lightGray focus:outline-none hover:shadow-lg bg-oneCard-darkBlue"
                                                onClick={() => {
                                                    navigate("create-card");
                                                }}>
                                                Create Card
                                            </button>
                                        </motion.div>
                                        <motion.div variants={btnVariants} initial={{ scale: 0.3 }} animate={{ scale: 1 }} whileHover="hover" whileTap={{ scale: 0.9 }}>
                                            <PageLink
                                                to="/login"
                                                className="w-full py-3 mt-3 mb-8 text-lg font-medium text-center rounded-full cursor-pointer px-7 text-oneCard-lightGray focus:outline-none hover:shadow-lg bg-oneCard-darkBlue"
                                                onClick={() => {
                                                    setSidebar(false);
                                                    auth?.logoutUser();
                                                }}>
                                                    Logout
                                            </PageLink>
                                        </motion.div>
                                    </>
                                )}
                            </div>
                        </div>

                        <div className="flex-grow h-screen bg-gray-500 bg-opacity-25" onClick={() => setSidebar(false)}></div>
                    </motion.div>
                </motion.div>
            </div>
            <div className="my-modal d-none" id="myModal">
                <MyModal handelClose={handelClose} />
            </div>
            <div id="navbarSpacer3d1447cf-6762-464f-a561-d42f13ffed34" style={{ transition: "0.5s" }} className={` ${navbar ? "p-5" : ""}`}></div>
            <Outlet />
        </>
    );
}

export default MyNavBar;
