/*
    메모이제이션(memoization)
    = 컴퓨터 프로그램이 동일한 계싼을 반복해야 할 때
    이전에 계산한 값을 메모리에 저장함으로써 동일한 계산의
    반복 수행을 제거하여 프로그램 실행 속도를 빠르게 하는 기슬..

    useMemo
    - 특정 값이 변경될 때만 메모이제이션된 값을 재계산하여 성능 개선
    useMemo의 두번째 인자로 전달된 값이 변경될 때만 연산 수행..
*/

import { useState , useMemo } from "react";



const hardCalculator = (num) => {
    console.log("어려운계싼기");

    for(let i = 0; i < 99999999; i++)
    {

    }
    return  num + 1000;
}

const easyCalculator = (num) =>
{
    console.log("쉬운계싼기");
    return num + 1;
}

export const UseMemoComponent = () => {
    const [hardNumber,setHardNumber] = useState(0);
    const [easyNumber,setEasyNumber] = useState(0);

    const hardSum = useMemo(()=>{
        return hardCalculator(hardNumber);
    },[hardNumber]);
    const easySum = useMemo(()=>{
        return easyCalculator(easyNumber);
    },[easyNumber]);

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