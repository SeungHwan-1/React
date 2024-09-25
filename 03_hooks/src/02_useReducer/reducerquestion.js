import { useReducer } from "react";


const reducer =(state,action) => {

    switch(action.type){
        case 'INCREMENT':
            return {...state, count: state.count + 1};
        case 'DECREMENT':
            return {...state, count: state.count - 1};
        case 'TEXT' :
            return {...state, text: action.text};
        default:
            return state;
    }
}


const Counter = ({state,dispatch}) => {

    return (
        <>
            <h1>Counter : {state.count}</h1>
            <button onClick={()=>dispatch({type:"INCREMENT"})}>+1</button>
            <button onClick={()=>dispatch({type:"DECREMENT"})}>-1</button>
        </>
    )

}

const TextInput = ({state,dispatch}) => {

    return (
        <>
            <input type="text" value={state.value} 
            onChange={(e)=>dispatch({type:"TEXT", text: e.target.value})}/> 
            <p>입력한 텍스트 : {state.text}</p>

        </>
    )
}


const ReducerQuestion = () => {
    const allState = {count :0, text:''};

    const [state,dispatch] = useReducer(reducer,allState);

    return (
        <>
            <Counter state={state} dispatch={dispatch}/>
            <TextInput state={state} dispatch={dispatch}/>
        </>
    )
}

export default ReducerQuestion;