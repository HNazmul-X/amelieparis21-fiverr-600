import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import UserContext from "./Context/UserContext";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <UserContext>
                <App />
            </UserContext>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root"),
);
