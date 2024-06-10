import { useState } from "react"
import ReactDOM from "react-dom/client"
import Counter from "./counter"
import Random from "./random"
import Formname from "./Form"
import Twoinput from "./twoinput"
import Add from "./Addnum"
import Twocomp from "./twocomp"
import List from "./list.jsx"
import  Color from "./color.jsx"

const root=ReactDOM.createRoot(document.getElementById("root"))
function Changename(){
  var [myname,nwname]=useState("Dhaya")
  function changename(){
    nwname("Dhayananth")
  }
  return(
    <div>
      <h1>{myname}</h1>
      <button onClick={changename} >Change</button>
    </div>
  )
}

root.render(
  <div>
    <List/>
   <Changename/>
   <Counter/>
   <Random/>
   <Formname/>
   <Twoinput/>
   <Add/>
   <Twocomp/>
   <Color/>
  </div>
)