import React from 'react';
import Successful from '../../assets/images/Group 1262.png';


const Successfully = () => {
    return (
        <div id='successfully_area'>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <div id="successful_area">
                            <div class="SCard">
                                <img src={Successful} class="img-fluid" alt="" />
                            </div>

                            <div className="SInfo">
                                <h4>Profile verified Successfully</h4>
                                <p>Please wait for admin approve for continue with this account</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Successfully;