import React from 'react'
import MultipleDesign from './sections/MultipleDesign'
import VideoExplainer from './sections/VideoExplainer';
import SubHome from "./sections/SubHome/SubHome"
import About from './sections/SubHome/About';

function HomePage() {
    return (
        <><div className='py-5'>

        </div>
            <SubHome />
            <MultipleDesign />
            <VideoExplainer />
            <div className='py-5'>
            <About />
        </div>
        </>
    )
}

export default HomePage
