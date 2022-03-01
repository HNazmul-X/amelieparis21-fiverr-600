import axios from "axios";
import GetCookie from "./Coockie";

export const SecureFetch = {
    /**
     *
     * @param {url:fetching data url} url
     * @param {which data you want to push} data
     * @returns
     */
    post: (url, data, config) => {
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

    get: (url, config) => {
        const getCookie = new GetCookie();
        return new Promise(async (resolve, reject) => {
            try {
                const { data: returnedData, status } = await axios.get(url, {
                    headers: {
                        "Content-type": "Application/json",
                        Authorization: getCookie.getCookie("token"),
                        userId: getCookie.getCookie("userId"),
                    },
                    ...config,
                });
                if (status === 200) {
                    resolve(returnedData);
                } else {
                    reject("failed to fetch data");
                }
            } catch (e) {
                if (e) {
                    reject(e);
                }
            }
        });
    },
};
