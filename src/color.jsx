import { useState } from "react"

const Color=()=>{
const [colour,setcolour]=useState(false)
const press=()=>{
    setcolour(!colour)
}
  return(
    <>
    <div style={{backgroundColor:colour?"red":"blue",width:"100px",height:"100px"}} ></div><br />
    <button onClick={press}>change color</button>
    </>
  )
}
export default Color