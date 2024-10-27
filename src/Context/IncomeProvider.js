import React from "react";
import { useState } from "react";
import incomeContext from "./incomeContext";



const IncomeProvider = (props)=>{
    const[income,setIncome] = useState(0)
    const [expense,setExp] = useState(0)
    const [history,setHistory] = useState([])
    const [balance,setBalance] = useState(0)

    return(
        <incomeContext.Provider value={{
            income,
            setIncome,
            expense,
            setExp,
            history,
            setHistory,
            balance,
            setBalance
        }}>
            {props.children}
        </incomeContext.Provider>
    )


}

export default IncomeProvider