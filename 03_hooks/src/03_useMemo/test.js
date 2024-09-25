import { useState, useEffect , useMemo } from "react"



const Calculator =(num) =>
{
    return num**2;
}




export const CaluatorComponent = ()=>
{
    const [inputValue,setInputvalue] = useState("숫자를 입력하세요");
    const sum = Calculator(inputValue);
    return(
        <>
            <h1>숫자 제곱 계산기</h1>
            <input type="text" value={inputValue} 
                onChange={e=>setInputvalue(e.target.value)}/>
                <h1>제곱값</h1>
                <h3>{sum}</h3>
        </>
    )

}