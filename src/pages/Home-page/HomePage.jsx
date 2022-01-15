import React from 'react'
import MultipleDesign from './sections/MultipleDesign'
import VideoExplainer from './sections/VideoExplainer';
import OneCard from './sections/OneCard';
import AboutUS from './sections/AboutUS';
import Refference from './sections/Refference';

function HomePage() {
    return (
        <>
            <div className='py-5'>
                <OneCard />
                <MultipleDesign />
                <VideoExplainer />
                <div className='py-5' />
                <Refference />
                <AboutUS />
            </div>
        </>
    )
}

export default HomePage
