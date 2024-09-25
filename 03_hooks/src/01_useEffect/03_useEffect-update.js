import {useState} from "react";
import {useEffect} from "react";

const UseEffectUpdate = ()=>{
    const [user,setUser] = useState({username:'',password:''});

    const onChangeHandler = e =>
    {
        setUser({
            ...user,                          // 유저 전체를 가져와서 참조하고 e.target.name이 변하는곳을 밸류로 채워줌
            [e.target.name] : e.target.value // 이구문이 이해가안됨 
        })
    }

    useEffect(()=>{
        console.log("username 변경 감지");
    },[user.username]);

    useEffect(()=>{
        console.log("password 변경 감지");
    },[user.password]);

    return (
        <>
            <label>userName : </label>
            <input type="text" name="username" onChange={onChangeHandler}/>
            <br/>
            <label>password :</label>
            <input type="password" name="password" onChange={onChangeHandler}/>
            <h3>username : {user.username}</h3>
            <h3>password : {user.password}</h3>
        </>

    )
}
export default UseEffectUpdate;