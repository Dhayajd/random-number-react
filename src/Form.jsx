import { useState } from "react"

   const Formname=()=>{
    const[myname,setmyname]=useState("Dhaya")
   const  handlechange=(event)=>{
        setmyname(event.target.value)
        console.log(setmyname)
    }
    return(
        <div>
            <form>
                <input value={myname} onChange={handlechange}></input>
                <button>Submit</button>
            </form>
            <br />
            <br />
        </div>
    )
}
export default Formname