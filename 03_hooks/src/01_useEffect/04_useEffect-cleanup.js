import {useState} from "react";
import {useEffect} from "react";


/*
    useEffect는 기본적으로 랜더링 직후와 업데이트 직후 호출된다.
    컴포넌트가 마운트 해제되기 직전이나 업데이트 되기 전에
    실행할 내용이 있다면 정리 (clean-up)을 할 수 있다.
    이전 effect 내용을 정리하고 난 뒤 새로운 effect가 동작하도록 할 떄 사용된다..
    이전 effect가 남아있는 상태에서 새로운 effect가 발생하게 되면
    마운트 해제가 일어나고 나서도 메모리 누수나 출동이 발생할 가능성이 있다.
*/

const Timer = () => {

    useEffect(()=>{
        console.log("타이머가 시작됨..");
        
        const timer = setInterval(()=>{
            console.log(new Date().toLocaleTimeString());
        },(1000));

        return (()=>{
            clearInterval(timer); //끝나는시점에 한다?
            console.log("타이머 끝남");
        }
    )
    },[])

    return <h1>타이머를 시작합니다..</h1>
}




export const Container = ()=>{
    const [isTrue,setIsTure] = useState(false);

    return (
        <>
            <button onClick={()=>{setIsTure(!isTrue)}}>타이머 토글</button>
            {isTrue && <Timer/>}
        </>
    )
}


