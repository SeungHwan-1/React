import React from "react";
const {useState} = React;

const InputContainer = ({todoList,setTodoList}) => {

    const [input, setInput] = useState("");

    const changeInput = e => {
        setInput(e.target.value);
    }

    const addList = () => {
        setTodoList([...todoList,input]);
        alert("등록완료");
        setInput("");
    }

    return (
        <>
            <input type="text" value={input} onChange={changeInput}/>
            <button onClick={addList}>추가</button>
        </>
    )
}

export default InputContainer;