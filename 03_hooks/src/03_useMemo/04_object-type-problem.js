import { useState, useEffect , useMemo } from "react"

// useMemo : 메모이제이션을 통해 비용이 큰 계산을 최적화 하거나,
//참조(주소값)이 동일해야 하는 경우에 사용한다..
// 의존성이 변경되지 않으면 이전의 계산된 값을
// 재사용 하여 불필요한 렌더링을 방지한다.

export const LocationComponent = ()=>
{
    const [isKorea,setIsKorea] = useState(true);
    const [number,setNumber] = useState(0);

    console.log("랜더링");
    // 1. 지역 변수에 문자열로 초기화 -기본 자료형(state변화시 location 변화없음)
    const location = isKorea? "한국":"일본";

    // 2. 지역 변수에 객체로 초기화 -주소값이 변해서 
    // 유즈이팩트 호출 객체의 주소값이 랜더링시마다 변화
    const location1 = {
        country : isKorea? "한국":"일본"
    }
    // 3. 지역 변수에 useMemo의 반환값으로 초기화
    const location2 = useMemo(()=>{
        return{
           country : isKorea? "한국":"일본"
        }
    },[isKorea])

    useEffect(()=>{
        console.log("useEffect 호출");
    },[location2]);

    return (
        <>
            <h2>지금 당신의 위치는? </h2>
            <p>국가 : {location1.country}</p>
            <button onClick={()=>setIsKorea(!isKorea)}>국가 변경</button>
            <hr/>
            <h2>좋아하는 숫자를 입력해 주세요</h2>
            <input type="number" value={number}
                onChange={e=>setNumber(e.target.value)}/>
        </>
    )
}