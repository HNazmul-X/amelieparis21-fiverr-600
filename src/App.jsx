import { useState } from "react";
import NavbarRouter from "./router/router";
import "./styles/style.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
                <NavbarRouter />
        </>
    );
}

export default App;
