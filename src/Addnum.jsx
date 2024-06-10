import { useState } from "react"



const Add=()=>{
    const [num1,setnum1]=useState()
    const[num2,setnum2]=useState()
    const[SUM,setsum]=useState(0)
   const  hsetnum1=(event)=>{
        setnum1(event.target.value)
    }
    const hsetnum2=(event)=>{
        setnum2(event.target.value)
    }
    const hsum=(event)=>{
        event.preventDefault()
        setsum(Number(num1)+Number(num2))

    }

    return(
      <>
       <label>ENTER NUMBER 1 : </label>
       <input type="number" value={num1} onChange={hsetnum1}></input>
       <br /><br />
       <label>ENTER NYMBER 2 : </label>
       <input type="number" value={num2} onChange={hsetnum2}></input>
       <br /><br/>
       <button onClick={hsum}>ADD</button>
        <h1>
            sum is {SUM}
        </h1>
       
      </>
    )
}
export default Add