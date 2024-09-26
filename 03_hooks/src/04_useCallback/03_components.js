import { useState  ,useEffect, useCallback } from "react"


export const CallbackComponent = () =>
{
    const [size,setSize] =useState(200);
    const [isDark,setIsDark] = useState(false);

    const genSquareStyle =useCallback(()=>{
        return {
            backgroundColor : "orangered",
            width : size,
            height : size
        }
    },[size]);

    return (
        <>
            <div style={{backgroundColor:isDark? "black":"white"}}>

            <input type="range" min="100" max="900" 
            onChange={e=>setSize(parseInt(e.target.value))}/>

            <button onClick={()=>setIsDark(!isDark)}>{isDark.toString()}</button>
            <Square genSquareStyle={genSquareStyle}/>

            </div>
        </>
    )

}

const Square = ({genSquareStyle}) => {
    const [style,setStyle] =useState({});

    useEffect(()=>{
        console.log("style 변경");
        setStyle(genSquareStyle());
    },[genSquareStyle]);

    return <div style={style}></div>
}