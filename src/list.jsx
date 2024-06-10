import { useState } from "react"

const List=()=>{
   const [mylist,setlist]=useState(["Apple","orange","grape"])
   const [myitem,setitem]=useState("")
   const handle=(event)=>{
    setitem(event.target.value)
   }
   const addd=()=>{
     setlist([...mylist,myitem])
     setitem("")
   }


 return(
    <>
    <form>
    <input value={myitem} onChange={handle} required></input>
    <button onClick={addd}>Submit</button>
    </form>
    {
        mylist.map(function(item){
            return(<li>{item}</li>)
        })
    }
    </>
 )
}
export default List