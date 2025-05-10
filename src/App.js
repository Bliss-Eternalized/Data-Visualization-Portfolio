import { Routes, Route } from "react-router-dom";
import "spotlight.js";

import Header from "./pages/header.jsx";
import Main from "./pages/main.jsx";
import RentPrices from "./pages/rent_prices.jsx";
import DesignProcess from "./pages/design_process.jsx";
import DataVisRecreation from "./pages/data_vis_recreation.jsx";
import AnimViability from "./pages/anim_viability.jsx";

import "./styles/loader-style.css"
import "./styles/landing-style.css"

function App() {
    var sessionstorage = require("sessionstorage");
    var loader_className = sessionstorage.getItem("loader-className") || ""; //Configured in the render-handling function.

    return (
        <div>
            <div id="loader" className={loader_className}></div>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/rent-prices" element={<RentPrices />} />
                <Route path="/design-process" element={<DesignProcess />} />
                <Route path="/data-vis-recreation" element={<DataVisRecreation />} />
                <Route path="/anim-viability" element={<AnimViability />} />

            </Routes>
        </div>
    );
}

export default App;