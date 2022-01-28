import React from 'react';
import portrait from "../../../assets/images/portrait.png";

const Refference = () => {
    return (
        <div id="refference_area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="refference_content">
                            <h2>Some thing Text World Be here</h2>
                             <p>sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                                
                            <button className='btn refferenceBtn'>Download Refference File</button>
                        </div>
                    </div>

                    <div className="col-md-4 offset-md-1">
                        <div className="refference_img">
                            <img src={portrait} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Refference;