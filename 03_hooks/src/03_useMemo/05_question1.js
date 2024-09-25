import { useState, useEffect , useMemo } from "react"

const SqareCalculator = () => {
    const [numbers, setNumbers] = useState("");
    const [sqareNumbers, setSquaredNumbers] = useState([]);

    useEffect(() => {
        console.log("제곱값 계산 실행");
        
        const a = numbers.split(",");
        const b = a.map((num,index) => {
            
            if(index === 1)
            {

            
            return (
                
             isNaN(num) ? "0" : num ** 2
               
            )
        }
        return num;
            
           
    });
        setSquaredNumbers(b);
    }, [numbers]);

    //const [sqareNumbers,setsqareNumber] = useState([]);
   
    
   /*const sqareNumbers = useMemo(()=>{
        console.log("제곱값 계산 실행");
        return numbers.split(",").map(num=>{
            return isNaN(num)? "뭐" : num**2;
        })
    },[numbers]);*/
    


    return(
        <>
        <h1>숫자 제곱 계산기</h1>
            <input type="text" value={numbers} 
                onChange={e=>setNumbers(e.target.value)}/>
                <h1>제곱값</h1>
                <ul>
                {sqareNumbers.map((current)=>{
                        return <li>{current}</li>
                    })}
                </ul>
               
            
        </>
    )
}

export default SqareCalculator;