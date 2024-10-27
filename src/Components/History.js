import React from "react";
import { useContext } from "react";
import incomeContext from "../Context/incomeContext";

const History = ()=>{
    const{history} = useContext(incomeContext)
    console.log(history)


    return (
        <div>
            {
                history.map((his)=>(
                    <li>{his.text + " = " + his.value}</li>
                ))
            }

        </div>
    )
}

export default History