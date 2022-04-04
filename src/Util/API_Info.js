const local = `http://localhost:8080`;
const server = "https://onecardpro-server-demo-server.herokuapp.com";

export const apiBaseURL = server;

export const togglingNavbar = (type) => {
    const navbar = document.querySelector("#homepage.onecardPro_navbar");
    const navbarSpacer = document.querySelector("#navbarSpacer3d1447cf-6762-464f-a561-d42f13ffed34");
    try {
        if (!navbar && !navbarSpacer) return;
        if (type === "SHOW") {
            navbar.style.display = null;
            navbarSpacer.style.display = null;
            return true;
        } else if (type === "HIDE") {
            navbar.style.display = "none";
            navbarSpacer.style.display = "none";
            return true;
        } else {
            return false;
        }
    } catch (e) {
        console.error(e);
    }
};

export const removePrefixFromUrl = (url) => {
    if (!url) return false;
    if (url?.startsWith("https://wa.me/")) {
        return url?.split("https://wa.me/")[1];
    } else if (url?.startsWith("https://")) {
        return url?.split("https://")[1];
    } else if (url?.startsWith("tel:")) {
        return url?.split("tel:")[1];
    } else if (url?.startsWith("mailto:")) {
        return url?.split("mailto:")[1];
    }
};
