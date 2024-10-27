import React, { useState } from "react";
import incomeContext from "../Context/incomeContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";



const Expenese = ()=>{

    const {income,setIncome,expense,setExp,balance,setBalance,setHistory,history} = useContext(incomeContext)
    // console.log(income,expense,balance)

    const[text,setText] = useState("")
    const [value,setValue]  =useState("")


    const navigate = useNavigate()


    function handleTransaction (){
        // console.log(text,val)
        if(value.charAt(0) === "+"){
            const val = Number(value)
            setIncome(income + val)
            setBalance(balance + val)
            setHistory([...history,{text:text,value:value}])

        }
        else{
            if(balance !== 0){
                console.log(true)
                const val = Number(value)
                setExp(expense - val)
                setBalance(balance + val)
                setHistory([...history,{text:text,value:value}])
            }
        }
        setText("")
        setValue("")
    }

    function handleHistory(){
        navigate("/history") 

    }


    return(
        <div className="exp" style={{alignSelf:"center", border:"solid 1px", boxShadow:"0px 0px 5px", width:"30%",margin:"auto",padding:"20px",backgroundColor: "#8BC6EC",
            backgroundImage: "linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)",border:"none",borderRadius:"8px"}}>
            <h2 style={{color:"green",textAlign:"center"}}>Expense Tracker</h2>
            <br></br>
            <div>
                <h1>Your Balance:</h1>
                <br></br>
                <h2>{balance}$</h2>
            </div>
            <br></br>
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                <h2 style={{color:"#0066b2"}}>Income:{income} </h2>
                <h2 style={{color:"#EF0107"}}>Expense:{expense} </h2>
            </div>
            <br></br>
            <button onClick={handleHistory} className="his-btn" style={{border:"none",padding:"8px",borderRadius:"5px",color:"white",backgroundColor:"#32de84"}}>
                See History
            </button>
            <br></br>
            <br></br>
            <h3>Add Transactions</h3>
            <br></br>
            <div style={{display:"flex",flexDirection:"column",gap:"10px",}}>
                <p style={{color:"white",fontWeight:"bold"}}>"+" mean income "-" meanse expense--- like +500 and -500</p>
                {
                    balance == 0 ? (
                        <div className="input-div">

                            <h2 style={{color:"#EF0107"}}>Your Current Balnce is 0</h2>
                            <input onChange={(e)=>setText(e.target.value)} type="text" placeholder="text" name="text" value={text}></input>
                            <input onChange={(e)=>setValue(e.target.value)} type="text" placeholder="Amount" name="amount" value={value}></input>
                            <button onClick={handleTransaction}>Add Transactions</button>
                        </div>
                    )
                    :
                    (
                        <div className="input-div">

                            <input onChange={(e)=>setText(e.target.value)} type="text" placeholder="text" name="text" value={text}></input>
                            <input onChange={(e)=>setValue(e.target.value)} type="text" placeholder="Amount" name="amount" value={value}></input>
                            <button onClick={handleTransaction}>Add Transactions</button>
                        </div>
                    )
                }
            </div>


        </div>
    )
}

export default Expenese