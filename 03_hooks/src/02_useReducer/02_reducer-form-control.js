import { useReducer } from "react";


const reducer = (state,action)=>
{
    console.log(1);
    return ({
        ...state,[action.name] : action.value}
    )
}

export const Input = () => {
    const [state,dispatch] = useReducer(reducer,{pass:'',passcheck:''});

   
    const onChangeHandler = e => dispatch(e.target);
    return (
        <>
            <label>비밀번호 : </label>
            <input type="password" name="pass" onChange={onChangeHandler}/>

            <label>비밀번호 확인 : </label>
            <input type="password" name="passcheck" onChange={onChangeHandler}/>

            <div>
                <h3>입력한 이름 : {state.pass}</h3>
                <h3>입력한 닉네임 : {state.passcheck}</h3>

            </div>
        </>
    )

}

export const ReducerFormControl =() =>{
    const[state,dispatch] = useReducer(reducer,{name:'',nickname:''});

    const {name,nickname} = state; //  구조분해할당
    const onChangeHandler = e => dispatch(e.target);

    return (
        <>
            <label>이름 : </label>
            <input type="text" name="name" onChange={onChangeHandler}/>

            <label>닉네임 : </label>
            <input type="text" name="nickname" onChange={onChangeHandler}/>

            <div>
                <h3>입력한 이름 : {name}</h3>
                <h3>입력한 닉네임 : {nickname}</h3>

            </div>
        </>
    )
}