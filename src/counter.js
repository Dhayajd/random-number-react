import { useState } from "react"

function Counter(){
    var [count,ccount]=useState(0)
    function increase(){
       ccount(count+1)
    }
    function decrease(){
      ccount(count-1)
    }

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={increase}>increase</button>
            <button onClick={decrease}> decrease</button>
        </div>
    )
}
export default Counter