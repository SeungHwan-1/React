import { useReducer } from "react";

const reducer = (state,action) =>
{
    console.log(action);
    
    switch(action.type){
        
        case 'DECREMENT':
            return {...state,value:state.value-1}
            
        case 'INCREMENT':
            return {...state,value:state.value+1}
        case "text":
           return{...state, name : action.value};
    }

   

   
}



export const UseReducer =()=>{

    const [state,dispatch] = useReducer(reducer,{value : ''});
    const [state1,dispatch1] = useReducer(reducer,{value : 0});
    const onChangeHandler = e => dispatch(e.target);

    return (
        <>
        
        <input type="text" name="name" onChange={(onChangeHandler)}/>
        
        <button onClick={()=>dispatch1({type:"DECREMENT"})}>-1</button>
        <button onClick={()=>dispatch1({type:"INCREMENT"})}>+1</button>
        <h1>count : {state1.value}</h1>
        <h3>입력한 이름 : {state.name}</h3>
        </>
    )
}