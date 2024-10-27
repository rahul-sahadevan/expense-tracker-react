import React from "react";
import App from "./App";
import ReactDom from "react-dom";
import IncomeProvider from "./Context/IncomeProvider";
import { BrowserRouter } from "react-router-dom";
import "./style.css"


const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <IncomeProvider>

            <App/>
        </IncomeProvider>
    </BrowserRouter>

)