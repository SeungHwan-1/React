import Test from "./test";
import React from 'react';

const {useState} = React;
function App() {
 
  const [names,setNames] = useState([
    {id:1,name:"안녕",tf:false},
    {id:2,name:"안녕2",tf:false}
]);

     const [inputText,setInputText] = useState("");
     const [nextId,setNextId] = useState(3); // 4가머지
     const [color,setColor] = useState("");
     const [color1,setColor1] = useState("");
     const [backgroundColor,SetBackgound] = useState("");
     const [underLine,SetLine] = useState(false);

     const style1 ={
      textDecoration  : "none",
      color:color,
      backgroundColor:backgroundColor
  }
  
  const style2 ={
    textDecoration :"line-through",
    backgroundColor:backgroundColor
}
  const style ={
    
    color:color,
    backgroundColor:backgroundColor
}

     const [Check,SetCheck] =useState(0);

     const onChangeHandler = e => setInputText(e.target.value);
     const onClickHandler = ()=>{
      const changeNames = names.concat({ // 햇갈림
        id:nextId,
        name:inputText,
        
      });
      

      setNames(changeNames);
      setNextId(nextId+1);
      setInputText("");
   }
              
   const onRemove = (id) => {
    const changeNames = names.filter(name => name.id !== id); // 트루일때만 반환
    setNames(changeNames);
}
   const onChangeColor = (e) =>{
    setColor1(e.target.value);
   }
   const onClickColor = ()=>
   {
      
      setColor(color1);
   }
   const onCheck = (e)=>
   {
     SetCheck(e.target.value);
   }

   const checkHandler= (tf) => {
    //SetLine(text-decoration-color : overline "red")
   
      SetLine(!underLine);
    
     
   }
   const Background = () =>{
    SetBackgound("black");
    setColor("white");
   
   }


  const nameList = names.map(name =>{

    const onChangeBox = (name1) =>{
       const tfName = names.map(name=>{
          if(name.id === name1.id){
            name.tf = !name.tf
          }
          return name;
       })

       setNames(tfName);
    }
    
  return (<>
  <input type="checkBox" onChange={()=>onChangeBox(name)}/>
  
  
  
  <li key={name.id} style = {(name.tf)? style2 :style1}> {name.name} 
    <button onClick ={()=>onRemove(name.id)}>삭제</button></li>
  </>) //이구분이해가 좀 안됨
});

  
  return (
   <div style = {style} >
   
   <h1 style={{color}}>Todolist</h1>
   <Test/>
   <button onClick ={Background}>다크모드</button>
   <ul>
       <span>{nameList}</span>
   </ul>
   <input type="text" value={inputText} onChange={onChangeHandler}/>
                    <button onClick={onClickHandler}>추가</button>
    <input type="text" value={color1} onChange={onChangeColor}/> <button onClick={onClickColor} >색변경</button>
   </div>
  );
}

export default App;
