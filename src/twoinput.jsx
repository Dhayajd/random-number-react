import { useState } from "react"

function Twoinput(){
    const[fname,setfname]=useState("")
    const [lname,setlname]=useState("")
    const[result,setresult]=useState("Result")
   
    function fchange(event){
        setfname(event.target.value)

    }
    function lchange(event){
        setlname(event.target.value)

    }
   
   
    const hchanges=(event)=>{
        event.preventDefault()
        setresult(fname+" "+lname)
         
    }
    return(
        <div>
            <label htmlFor="fname">First Name : </label>
           <input id="fname" value={fname} onChange={fchange}></input>
           <br />
           <br />
           <label htmlFor="lname">Last Name : </label>
           <input id="lname" value={lname} onChange={lchange}></input>
           <br />
           <br />
           <button onClick={hchanges}>Submit</button>
           <div>
            <h1>{result}</h1>
           </div>

        </div>
    )
}
export default Twoinput