import { useEffect, useState } from "react"

const CallBackProblem = () =>{

    const [number,setNumber] = useState(0);
    const [toggle,setToggle] = useState(false);
    

    const printNumber = () =>
    {
        console.log(`current number : ${number}`);
    }

    useEffect(()=>{
        console.log("printNumber 값 변화 인지됨");

    },[printNumber]);

    return (
        <>
            <input type="number" value={number} onChange={e=>setNumber(parseInt(e.target.value))}/>

            <br/>
            <button onClick={()=>setToggle(r=>!r)}>{String(toggle)}</button>
            <br/>
            <button onClick={printNumber}>printNumberState</button>
        </>
    )

}

export default CallBackProblem;