import { InlineIcon } from "@iconify/react";
import swal from "@sweetalert/with-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiBaseURL } from "../../../../../Util/API_Info";
import { SecureFetch } from "../../../../../Util/SecureFetch";

const AllCard = () => {
    const [cardData, setCardData] = useState([
        {
            frontSide: { logo: "", scale: 0 },
            backSide: { logo: "", scale: 1, infoAlign: "" },
            _id: "",
            card_status: "",
            user: { _id: "", email: "", profile: { _id: "", firstname: "", lastname: "" } },
            delivery_info: { _id: "", orderDate: 0 },
        },
    ]);
    const navigate = useNavigate();

    useEffect(async () => {
        try {
            const data = await SecureFetch.get(`${apiBaseURL}/api/card/get-all-card/all`);
            setCardData(data);
        } catch (e) {
            console.log(e);
        }
    }, []);

    return (
        <div className="card-requested-table-section">
            <div className="table-conatiner">
                {cardData.length > 0 ? (
                    <table className="my-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Order Placed</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {cardData?.map((data, index) => {
                                const d = new Date(data?.delivery_info?.orderDate);
                                const formattedDate = `${d.getDate()}/ ${d.getMonth() + 1}/ ${d.getFullYear()}`;

                                return (
                                    <tr key={index}>
                                        <td>{data?.user?.profile?.firstname}</td>
                                        <td>{data?.user?.email}</td>
                                        <td>{formattedDate}</td>
                                        <td className={data?.card_status === "Pending" ? "st-pending" : data?.card_status === "Delivered" ? "st-delivered" : "st-rejected"}>{data?.card_status}</td>
                                        <td className="py-1">
                                            <InlineIcon className="p-1 fs-3 alert-success btn mx-2 rounded-pill" icon={"la:check"} />
                                            <InlineIcon className="p-1 fs-3 alert-danger btn mx-2 rounded-pill" icon={"la:times"} />
                                            <InlineIcon
                                                onClick={() => navigate(`/admin/card-request/preview/${data?._id}`)}
                                                className="p-1 fs-3 alert-primary btn mx-2 rounded-pill"
                                                icon={"fluent:open-folder-16-filled"}
                                            />
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
    );
};

export default AllCard;
