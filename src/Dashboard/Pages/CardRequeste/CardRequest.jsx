import React from 'react'
import DashboardTopBanner from '../../Components/DashboardTopBanner'
import CardRequestedTable from './component/CardRequestedTable';

function CardRequest() {
    return (
        <>
           
            <DashboardTopBanner title={"Card Requested"} />
            <CardRequestedTable />
        </>
    )
}

export default CardRequest
