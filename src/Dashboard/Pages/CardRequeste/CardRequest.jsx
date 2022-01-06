import React from 'react'
import { Outlet } from 'react-router-dom';
import DashboardTopBanner from '../../Components/DashboardTopBanner'
import CardRequestedTable from './component/CardRequestedTable';

function CardRequest() {
    return (
        <>
           
            <DashboardTopBanner title={"Card Requested"} />
            <Outlet/>
        </>
    )
}

export default CardRequest
