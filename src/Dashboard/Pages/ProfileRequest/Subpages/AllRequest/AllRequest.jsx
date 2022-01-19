import { InlineIcon } from "@iconify/react";
import swal from "@sweetalert/with-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiBaseURL } from "../../../../../Util/API_Info";
import { SecureFetch } from "../../../../../Util/SecureFetch";

const AllRequest = () => {
    //states and function variable
    const navigate = useNavigate();
    const [allProfileData, setAllProfileData] = useState([]);

    // use effects
    useEffect(async () => {
        try {
            const data = await SecureFetch.get(`${apiBaseURL}/api/profile/all-profile`);
            setAllProfileData(data);
            console.log("data", data);
        } catch (err) {
            swal("Error Ocurred", err.message, "error");
        }
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
                                    console.log(data);
                                    return (
                                        <tr key={index}>
                                            <td>{data?.user.username}</td>
                                            <td>{data?.user?.email}</td>
                                            <td>{data?.phone}</td>
                                            <td className={!data?.user?.isApproved ? "st-pending" : data?.user?.isApproved ? "st-delivered" : "st-rejected"}>
                                                {data?.isApproved ? "Accepted" : "Pending"}
                                            </td>
                                            <td className="py-1">
                                                {!data.user.isApproved && (
                                                    <InlineIcon
                                                        onClick={() => handleProfileRejectOrAccept(true, data.user._id)}
                                                        className="p-1 fs-3 alert-success btn mx-2 rounded-pill"
                                                        icon={"la:check"}
                                                    />
                                                )}
                                                {!data.user.isApproved && (
                                                    <InlineIcon
                                                        onClick={() => handleProfileRejectOrAccept(true, data.user._id)}
                                                        className="p-1 fs-3 alert-danger btn mx-2 rounded-pill"
                                                        icon={"la:times"}
                                                    />
                                                )}
                                                <InlineIcon
                                                    onClick={() => navigate(`/admin/profile-request/profile-creation/${data?._id}`)}
                                                    className="p-1 fs-3 alert-primary btn mx-2 rounded-pill"
                                                    icon={!data?.user?.profileTemplate ? "fluent:open-folder-16-filled" : "bx:bxs-edit"}
                                                />
                                                {data?.user?.profileTemplate ? <InlineIcon className="p-1 fs-3 alert-info btn mx-2 rounded-pill" icon={"bx:bx-expand-alt"} /> : null}
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
            </div>
        </>
    );
};

export default AllRequest;
