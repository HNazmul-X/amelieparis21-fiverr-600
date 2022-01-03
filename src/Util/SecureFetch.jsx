import axios from "axios";
import { useAuth } from "../Context/UserContext";
import GetCookie from "./Coockie";

export const SecureFetch = {
    /**
     *
     * @param {url:fetching data url} url
     * @param {which data you want to push} data
     * @returns
     */
    post: (url, data,config) => {
        const getCookie = new GetCookie();
        return new Promise(async (resolve, reject) => {
            const token = getCookie.getCookie("token");
            const userId = getCookie.getCookie("userId");
            if (token?.length > 0 && userId.length > 0) {
                try {
                    const { data: returnedData } = await axios.post(url, data, {
                        headers: {
                            "content-type": "application/json",
                            Authorization: token,
                            userId: userId,
                        },
                    });
                    if (returnedData) {
                        resolve(returnedData);
                    } else {
                        const error = new Error("Failed to Post Data");
                        reject(error);
                    }
                } catch (e) {
                    reject(e);
                }
            } else {
                const error = new Error("Sorry you are not logged in user");
                reject(error);
            }
        });
    },
};
