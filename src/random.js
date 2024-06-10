import { useState } from "react"

function Random(){
    let [num,cnum]=useState(0)
    function change(){
        
      cnum(Math.floor(Math.random()*10))
    }
    return(
        
        <div>
            <h1>Random number generation</h1>
            <h1>{num}</h1>
            <button onClick={change}>Generate</button>
        </div>
    )
}
export default Random