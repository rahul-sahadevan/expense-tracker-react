import React from "react";
import Expenese from "./Components/Expense";
import { Routes,Route } from "react-router-dom";
import History from "./Components/History";


const App = ()=>{
        

    return(
        <div>
           
            <Routes>
                <Route path="/" element={<Expenese/>}></Route>
                <Route path="/history" element={<History/> }></Route>
            </Routes>
            
        </div>
    )
}

export default App