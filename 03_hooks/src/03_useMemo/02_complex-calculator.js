import { useState } from "react";



const hardCalculator = (num) => {
    console.log("어려운계싼기");

    for(let i = 0; i < 99999999; i++)
    {

    }
    return num + 1000;
}

const easyCalculator = (num) =>
{
    console.log("쉬운계싼기");
    return num + 1;
}

export const ComplexCalculator = () => {
    const [hardNumber,setHardNumber] = useState(0);
    const [easyNumber,setEasyNumber] = useState(0);

    const hardSum = hardCalculator(hardNumber);
    const easySum = easyCalculator(easyNumber);

    return (
        <>
            <h1>어려운 계산기</h1>
            <input type="number"
                value={hardNumber}
                onChange={e=>setHardNumber(e.target.value)}/>
                <span>+10000 = {hardSum},{hardNumber}</span>
                <h1>쉬운 계산기</h1>
            <input type="number"
                value={easyNumber}
                onChange={e=>setEasyNumber(e.target.value)}/>
                <span>+1= {easySum}</span>
        </>
    )
}