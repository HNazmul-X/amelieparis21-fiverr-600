export default class GetCookie {
    constructor() {}

    setCookie(name, value, days = 7) {
        const date = new Date();
        date.setTime(date.getTime() + 1000 * 60 * 60 * 24 * days);
        const expires = date.toUTCString();
        document.cookie = `${name}=${value};expires=${expires};path=/;priority=high`;
        return true;
    }

    getCookie(name) {
        const allCookie = decodeURIComponent(document.cookie);
        const cookieArray = allCookie.split(";");
        const namedCookie = cookieArray.find((c) => c.startsWith(` ${name}`)) || cookieArray.find((c) => c.startsWith(name));
        const cookieValue = namedCookie && namedCookie.split("=")[1];
        return cookieValue;
    }

    deleteCookie(name) {
        const date = new Date();
        date.setTime(date.getTime() - 1000 * 60 * 60 * 24 * 3);
        const expire = date.toUTCString();
        console.log(expire);
        document.cookie = `${name}=;expires${expire}`;
        return true;
    }
}
