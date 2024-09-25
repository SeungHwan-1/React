import { useState } from "react";

const hardCalculator = (num) => {

    for(let i = 0;i<99569999;i++){

    }
    return num + 99569999;
}

export const HardCalculator = () => { // 컴포넌트
    const [ hardNumber,setHardNomber] = useState(0);
    const hardSum = hardCalculator(hardNumber);

    return (
        <>
            <h3>어려운 계산기</h3>
            <input type="number" value={hardNumber}
            onChange = {e => setHardNomber(parseInt(e.target.value))}/>
            <span>+99569999 = {hardSum}</span>
        </>
    )
}
//특정컴포넌트로인해 버벅임을 유발할수 있다