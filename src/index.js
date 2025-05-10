import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import reportWebVitals from "./reportWebVitals";

function Main() {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    var sessionstorage = require("sessionstorage");

    if (window.performance.navigation.type === window.performance.navigation.TYPE_RELOAD)
    {
        sessionstorage.setItem("load-transition", "true");
    }

    window.onbeforeunload = function () {
        var temp_disable_scroll_reset = sessionstorage.getItem("temp-disable-scroll-reset") || "false";
        if (temp_disable_scroll_reset === "false")
        {
            window.scrollTo(0, 0);
        }
        sessionstorage.setItem("temp-disable-scroll-reset", "false");
    };

    //Retrieve Session Storage Items
    var use_load = sessionstorage.getItem("load-transition") || "true";
    var use_first_load = sessionstorage.getItem("first-load-transition") || "true";

    //Logic for Deciding Loading Animation Type
    if (use_load === "true")
    {
        sessionstorage.setItem("load-transition", "false");
        if (use_first_load === "true")
        {
            sessionstorage.setItem("first-load-transition", "false");
            document.body.className = "load-body-full";
            sessionstorage.setItem("loader-className", "loader");
        }
        else
        {
            document.body.className = "load-body-fast";
            sessionstorage.setItem("loader-className", "loader-fast");
        }
    }
    else
    {
        document.body.className = "load-body-instant enable-scrolling";
        sessionstorage.setItem("loader-className", "");
    }

    //Note that React StrictMode will call each element twice.
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.StrictMode>
    );

    //Adds the background image after the render has taken place.
    //Ensures that the default background matches the page transitions.
    document.body.classList.add("body-bg-image");
};

Main();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
