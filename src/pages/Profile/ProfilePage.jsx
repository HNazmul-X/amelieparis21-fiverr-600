import ProfileTemplateProcess from "./Section/ProfileTemplateProcess";

import React, { Component } from "react";
import { togglingNavbar } from "../../Util/API_Info";

class ProfilePage extends Component {
    componentDidMount() {
        togglingNavbar("HIDE");
    }

    componentWillUnmount() {
        togglingNavbar("SHOW");
    }

    render() {
        return <ProfileTemplateProcess />;
    }
}

export default ProfilePage;
