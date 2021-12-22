import React,{useState} from "react";
function Team() {
    const [workers,setWorker]=useState(0)
    const [daysWork,setDaysWork]=useState(0)
    const [hoursWork,serHoursWork]=useState(0)
    const [className,setClassName]=useState("")
    function ClickUp(set,worker) {
        set(worker+1)
    }
    function ClickDown(set,worker) {
        set(worker-1)
    }
    function ClickReset(set) {
        set(0)
    }
    let value;
    const inputVablue=(e)=>{ value = e.target.value}
    return(
        <div>
            <h1>{className}</h1>
            <input type="text"onChange={inputVablue} />
            <button onClick={()=>{setClassName(value)}}>Changh Name</button>
            <h3>{workers}</h3>
            <input type="number" onChange={(e)=>{setWorker(Number(e.target.value))}}/><br></br>  
            <button onClick={()=>{ClickUp(setWorker,workers)}}>Up workers</button>
            <button onClick={()=>{ClickDown(setWorker,workers)}}>Down workers</button>
            <button onClick={()=>{ClickReset(setWorker,workers)}}>Reset workers</button>
            <h3>{daysWork}</h3>
            <button onClick={()=>{ClickUp(setDaysWork,daysWork)}}>Up days work</button>
            <button onClick={()=>{ClickDown(setDaysWork,daysWork)}}>Down days work</button>
            <button onClick={()=>{ClickReset(setDaysWork,daysWork)}}>Reset days work</button>
             <h3>{hoursWork}</h3>            
            <button onClick={()=>{ClickUp(serHoursWork,hoursWork)}}>Up hours work</button>
            <button onClick={()=>{ClickDown(serHoursWork,hoursWork)}}>Down hours work</button>
            <button onClick={()=>{ClickReset(serHoursWork,hoursWork)}}>Reset hours work</button>
            <p>Total:{daysWork*hoursWork}</p>
        </div>
    )
}
export default Team;