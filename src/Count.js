import React, { useState } from "react"
function Count(){

let [count,setCount]=useState(0)
const onClickHandler=()=>{
    let newCount=count+1;
    setCount(newCount)
}
    return <>
    <h1>{count}</h1>
    <button type="button" onClick={()=>onClickHandler()}>Increment</button>
    </>
}
export default Count