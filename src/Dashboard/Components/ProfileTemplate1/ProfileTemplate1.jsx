import React from 'react';

const ProfileTemplate1 = () => {
    return (
        <section className="card1">
            <div className="background-image">
                <img src="CoverImage.png" alt="" />
            </div>
            <div className="about">
                <div className="profile-img">
                    <img src="Profile Picture.png" alt="" />
                </div>
                <div className="name-and-share-icon d-flex justify-content-between">
                    <div className="name">
                        <h3>Sandhya Mer</h3>
                    </div>
                    <div className="share-icon">
                        <img src="Share.png" alt="" />
                    </div>
                </div>
                <div className="nature">
                    <span>PEACE | LOVE | TRAVEL</span>
                </div>
                <div className="career">
                    <div className="yellow-border"></div>
                    <div className="info">
                        <span className="posting">Social Media Manager at VRTeam Design</span>
                        <span className="subject">Design</span>
                        <span className="industry">ASU | Media & Firm</span>
                        <span className="location">Junagadh, IN</span>
                    </div>
                </div>
                <div className="tag-btns">
                    <button className="social-media">
                        <a href="#">Social Meida</a>
                    </button>
                    <button className="marketing">
                        <a href="#">Marketing</a>
                    </button>
                    <button className="design">
                        <a href="#">Design</a>
                    </button>
                    <button className="graphic-design">
                        <a href="#">GRAPHIC DESIGN</a>
                    </button>
                </div>
            </div>

            <div className="social-section">
                <div className="big-button add-to-contact">
                    <button>
                        <a href="">ADD TO CONTACT</a>
                    </button>
                </div>
                <div className="social-links">
                    <div className="social-line d-flex justify-content-between">
                        <div className="icon-details d-flex">
                            <div className="icon instagram">
                                <img src="Instagram.png" alt="" />
                            </div>
                            <div className="details">
                                <h5 className="media-name">Instagram</h5>
                                <span className="media-posting">Sandhyamer</span>
                            </div>
                        </div>
                        <div className="open-icon">
                            <img src="Path.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfileTemplate1;