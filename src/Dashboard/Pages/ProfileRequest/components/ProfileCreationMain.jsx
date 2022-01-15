import swal from "@sweetalert/with-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SecureFetch } from "../../../../Util/SecureFetch";
import DashboardTopBanner from "../../../Components/DashboardTopBanner";
import CardPreview from "./CardPreview";
import LeftSide from "./LeftSide";

function ProfileCreationMain() {
    const [singleProfile, setSingleProfile] = useState({});
    const { profileId } = useParams();

    useEffect(async () => {
        try {
            const url = `https://onecard-pro.herokuapp.com/api/profile/single-profile/${profileId}?select=user firstname lastname`;
            const data = await SecureFetch.get(encodeURI(url));
            setSingleProfile(data);
        } catch (e) {
            swal("error ocurred", e.message, "error");
        }
    }, []);

    const handleShowingFullPreview = async function () {
        try {
            const url = `https://onecard-pro.herokuapp.com/api/profile/single-profile/61d85bfd135ddaa72aeb326d`;
           const data = await SecureFetch.get(url);
            const dataArray = Object.entries(data);
            const modalContent = (
                <div className="card-details-content">
                    {dataArray
                        .filter(([key, value]) => !key.match(/_id|cards|user|createdAt|updatedAt|__v/))
                        .map(([key, value], index) => {
                            return (
                                <div className="input-group input-group-sm mb-1">
                                    <label className="small input-group-text alert-dark">{key}</label>
                                    <input type="text" className="form-control bg-light" readOnly defaultValue={value} />
                                </div>
                            );
                        })}
                </div>
            );
            if(data && modalContent){
                 swal({
                     title: "user full Preview",
                     content: modalContent,
                 });
            }
           
        } catch (e) {
            swal("error Ocurred", e.message, "error");
        }
    };

    return (
        <div className="dashbord-profile-createion p-0">
            <DashboardTopBanner
                title={
                    <div className="d-flex gap-1 align-items-center">
                        {`Creating Profile for`}
                        <strong>{`${singleProfile.firstname} ${singleProfile.lastname}`}</strong>
                        <button onClick={handleShowingFullPreview} className="btn btn-sm btn-light">
                            See Details
                        </button>
                    </div>
                }
            />
            <div className="p-3">
                <div className="row w-100">
                    <div className="col-md-7 col-xxl-9 pe-0">
                        <LeftSide />
                    </div>
                    <div className="col-md-5 col-xxl-3">
                        <CardPreview />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileCreationMain;
