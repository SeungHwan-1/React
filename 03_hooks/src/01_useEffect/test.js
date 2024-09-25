import {useState} from "react";
import {useEffect} from "react";



const TestTimer = ({id,onDelete}) =>{
    const[time,setTime] = useState(0);
    useEffect(()=>{
        
     
        const timer = setInterval(()=>{
           setTime(
            function(time){
            return(
                time+1
            )
        })
        },(1000));

        return (()=>{
            clearInterval(timer); //끝나는시점에 한다?
            console.log("타이머 끝남");
        }
    )
    },[])


    return (
        <>
          <h1>타이머{id} : {time}초</h1>
          <button onClick ={()=>onDelete(id)}>삭제</button>
        </>
    )
}



export const TimeApp = () => {

        const [timers, setTimers] = useState([]);
        const [count,setCount] = useState(1);
    
        const addTimer = ()=>{
            if(timers.length<5){
                setTimers([...timers,{id:count}]);
                setCount(count+1);
            }
        }
    
        const deleteTimer =(id) =>{
            setTimers(timers.filter((timer)=>timer.id !== id));
        }
    return(
        <div>
            
            <button onClick={addTimer}>타이머 추가</button>
            {timers.map((timer)=>{
               return <TestTimer id={timer.id} onDelete={deleteTimer}/>
            })}
        </div>
    )
    
    }
