import react,{useState} from "react";

function Counter() {
let[count,setCount] = useState(0);
const[string,setString] = useState("");
function EnlargeCount() {
    setCount(count+1)
}
function ReduceCount() {
    setCount(count-1)
}
function ResetCount() {
    setCount(0)
}
function PresentName() {
    setString("izhak")
}
return(
    <div>
         <h1>{count}</h1>
         <h1>{string}</h1>
         <button onClick={PresentName}>change</button>
         <button onClick={EnlargeCount}>Enlarge</button>
         <button onClick={ReduceCount}>Reduce</button>
         <button onClick={ResetCount}>Reset</button>

    </div>
)
}
export default Counter;