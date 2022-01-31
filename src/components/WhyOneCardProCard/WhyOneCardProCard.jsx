import React from 'react';

const WhyOneCardProCard = ({data}) => {
    return (
        <div className='why-onecard-pro-card'>
            <div className="icon">
                {data?.icon}
            </div>
            <div className="text">
                {data?.text}
            </div>
        </div>
    );
};

export default WhyOneCardProCard;