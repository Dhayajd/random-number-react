import { useState } from "react"
import Addsubmit from "./Addsubmit"



const Twocomp=()=>{
    const [cfname,ssetfname]=useState("")
    const [clname,ssetlname]=useState("")
    const[cresult,ssetresult]=useState("Result")

     const cfchange=(event)=>{
       ssetfname(event.target.value)

     }
     const clchange=(event)=>{
        ssetlname(event.target.value)
     }
     const cchange=()=>{
        ssetresult(cfname+" "+ clname)
     }

    return(
        <>
        <h1>Names with two components</h1>
        <input type="text" value={cfname} onChange={cfchange} ></input> <br /><br />
        <input type="text" value={clname} onChange={clchange}></input><br /><br />
        <button onClick={cchange}>Submit</button>
         <Addsubmit cresult={cresult}></Addsubmit>
        </>
    )
}
export default Twocomp