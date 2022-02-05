import { InlineIcon } from "@iconify/react";
import swal from "@sweetalert/with-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiBaseURL } from "../../../../../Util/API_Info";
import { SecureFetch } from "../../../../../Util/SecureFetch";
import DashboardTopBanner from "../../../../Components/DashboardTopBanner";

const CreatedProfile = () => {
    //states and function variable
    const navigate = useNavigate();
    const [allProfileData, setAllProfileData] = useState([]);
    const [dataInfo, setDataInfo] = useState({
        itemPerPage: 30,
        currentPage: 1,
        totalDocuments: 0,
    });

    // fetching data with pagination functionality
    const fetchData = async (currentPage, itemPerPage) => {
        try {
            const data = await SecureFetch.get(`${apiBaseURL}/api/profile/get-profile-by-user-filter?isApproved=true&pageNo=${currentPage}&limit=${itemPerPage}`);
            setAllProfileData(data.data);
            setDataInfo({
                itemPerPage: data?.itemPerPage,
                currentPage: data?.currentPage,
                totalDocuments: data?.totalDocuments,
            });
        } catch (err) {
            swal("Error Ocurred", err.message, "error");
        }
    };

    // use effects
    useEffect(async () => {
        fetchData(1, dataInfo?.itemPerPage);
    }, []);

    // Insider Functions for Handling data
    const handleProfileRejectOrAccept = (con, userId) => {
        try {
            swal({
                icon: "info",
                title: "Are you to Approve This User",
                buttons: ["No", "Yes"],
            }).then(async (value) => {
                if (value) {
                    const g_data = { status: true };
                    const r_data = await SecureFetch.post(`${apiBaseURL}/api/user//update-single-user-status/${userId}/`, g_data);
                    if (r_data === true) {
                        swal("Approved Successfully", "", "success");
                    }
                }
            });
        } catch (e) {
            swal(e.message, "", "error");
        }
    };

    return (
        <>
            <DashboardTopBanner title={"Created Profile || Approved Profile"} />
            <div className="card-requested-table-section">
                <div className="table-conatiner">
                    {allProfileData.length > 0 ? (
                        <table className="my-table">
                            <thead>
                                <tr>
                                    <th>username</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {allProfileData?.map((data, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{data.username}</td>
                                            <td>{data?.email}</td>
                                            <td>{data?.profile.phone}</td>
                                            <td className={!data?.isApproved ? "st-pending" : data?.isApproved ? "st-delivered" : "st-rejected"}>{data?.isApproved ? "Approved" : "Pending"}</td>
                                            <td className="py-1">
                                                {!data?.isApproved && (
                                                    <InlineIcon
                                                        onClick={() => handleProfileRejectOrAccept(true, data._id)}
                                                        className="p-1 fs-3 alert-success btn mx-2 rounded-pill"
                                                        icon={"la:check"}
                                                    />
                                                )}
                                                {!data?.isApproved && (
                                                    <InlineIcon onClick={() => handleProfileRejectOrAccept(true, data._id)} className="p-1 fs-3 alert-danger btn mx-2 rounded-pill" icon={"la:times"} />
                                                )}
                                                <InlineIcon
                                                    onClick={() => navigate(`/admin/profile-request/profile-creation/${data?.profile?._id}`)}
                                                    className="p-1 fs-3 alert-primary btn mx-2 rounded-pill"
                                                    icon={!data?.profileTemplate ? "fluent:open-folder-16-filled" : "bx:bxs-edit"}
                                                />
                                                {data?.profileTemplate ? <InlineIcon className="p-1 fs-3 alert-info btn mx-2 rounded-pill" icon={"bx:bx-expand-alt"} /> : null}
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    ) : (
                        ""
                    )}
                </div>

                {(dataInfo?.totalDocuments / dataInfo.itemPerPage).toFixed(0) >= 1 && (
                    <div className="pagination justify-content-center mt-5">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
                                <li onClick={() => dataInfo.currentPage >= 1 && fetchData(dataInfo?.currentPage - 1, dataInfo?.itemPerPage)} className={`page-item`}>
                                    <a className="page-link" href="#">
                                        &lt;&lt;
                                    </a>
                                </li>
                                {[...new Array(parseInt(dataInfo.totalDocuments / dataInfo?.itemPerPage))].map((item, index) => (
                                    <li onClick={() => fetchData(index + 1, dataInfo?.itemPerPage)} className={`page-item ${index + 1 === dataInfo.currentPage ? "active" : ""}`}>
                                        <a className="page-link">{index + 1}</a>
                                    </li>
                                ))}

                                <li
                                    onClick={() => dataInfo.currentPage <= dataInfo.totalDocuments / dataInfo.itemPerPage && fetchData(dataInfo?.currentPage + 1, dataInfo.itemPerPage)}
                                    className={`page-item ${dataInfo.currentPage == dataInfo.totalDocuments / dataInfo.itemPerPage ? "active disabled" : ""}`}>
                                    <a className="page-link" href="#">
                                        &gt;&gt;
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                )}
            </div>
        </>
    );
};

export default CreatedProfile;
