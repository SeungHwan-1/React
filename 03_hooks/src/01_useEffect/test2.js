import {useState} from "react";
import {useEffect} from "react";



export const ThisYear = ()=>{
    const [user,setUser] = useState({username:'',password:''});
    const [user1,setUser1] = useState({username:'',password:''});
    const [time,setTime] = useState(0);




    useEffect(()=>{
    const timer = setInterval(() => {
        setTime((time)=>time+1);
        if(time > 2)
        {
            setUser({username:"g",password:"f"});    
            setTime(0);      
        }
        
    },(1000));

    return ()=>{
            clearInterval(timer); //끝나는시점에 한다?
            console.log("타이머 끝남");
    };
    
    },[time]);
    const onChangeHandler = e =>
    {
        setUser({
            ...user,                          // 유저 전체를 가져와서 참조하고 e.target.name이 변하는곳을 밸류로 채워줌
            [e.target.name] : e.target.value // 이구문이 이해가안됨 
        })
    }
    const onClicker = ()=>
    {
        setUser1(user);
    }
    useEffect(()=>{
        console.log("username 변경 감지");
    },[user.username]);

    useEffect(()=>{
        console.log("password 변경 감지");
    },[user.password]);
    useEffect(()=>{
        console.log("변경 감지");
    },[user1]);

    return (
        <>
            <h1>프로필입력</h1>
            <label>userName : </label>
            <input type="text" name="username" value={user.username} onChange={onChangeHandler}/>
            <br/>
            <label>password :</label>
            <input type="password" name="password"value={user.password} onChange={onChangeHandler}/>
            <br/>
            <button onClick={onClicker}>저장</button>
            <h3>username : {user1.username}</h3>
            <h3>password : {user1.password}</h3>
            <h1>{time}</h1>
        </>

    )
}