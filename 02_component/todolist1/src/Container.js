import React from "react";
const {useState} = React;
const Item =({todo,setTodoList,todoList,color}) =>{
    const [check,setCheck] = useState(false);
    const style ={
        textDecoration : check? "line-through" : "none",
        color:color
    }
    const changeBox =()=>{
        setCheck(!check);
    }
    const removeTodo=()=>{
  
        const result = todoList.filter(item =>item !== todo);
        setTodoList(result);
    }


    return (
        <div>
            <input type="checkBox" onChange={changeBox} checked={check}/>
            <label style={style}>{todo}</label>
            <button onClick={removeTodo}>삭제</button>

        </div>
    )

}


const Container = ({todoList, setTodoList, color}) => {
    return (
        todoList.map((current,index)=>{
            return <Item todo={current} key={index} setTodoList={setTodoList} todoList={todoList} color={color}/>
            }
        )
    )
}

export default Container;