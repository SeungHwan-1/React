import { useState } from "react";

export const NoticeBoard = () => {

    const [user,setUser] = useState({id: 0 ,title:'',detail:''});
    const [user1,setUser1] = useState([]);
    const [coment,setComent] =useState({id: 0, coment : ""});
    const [comentl,setComentl] =useState([]);
    const [serch,setSearch] = useState("");


    const onChangeHandler = e =>
        {
            setUser({
                ...user,                          // 유저 전체를 가져와서 참조하고 e.target.name이 변하는곳을 밸류로 채워줌
                [e.target.name] : e.target.value 
            })

        }
        const onChangeHandlerC = (e,id) =>
            {
                if(e.target.id === id)
                {
                setComent({
                    ...coment,                          // 유저 전체를 가져와서 참조하고 e.target.name이 변하는곳을 밸류로 채워줌
                    [e.target.name] : e.target.value 
                })
            }
            }
    const onClicker =()=>
    {

        setUser1((prevUser1) => [...prevUser1, user]);
       // setUser1(...user1, user); // useEffect 에선 위에꺼가낮다
       setUser( {id:user.id+1,title:"",detail:""});
    }
    const onClickerC =()=>
        {
    
            setComentl((prevUser1) => [...prevUser1, coment]);
           // setUser1(...user1, user); // useEffect 에선 위에꺼가낮다
            
            setComent({id:coment.id+1, coment : ""});
        }
    const ondelete = (id) =>{
        setUser1(user1.filter((us)=>us.id !== id));
        setComentl([]);
    }
    const onChangeInclude = e =>{
            setSearch(e.target.value);
           
    }
    const filteredUsers = user1.filter((us) => us.title.includes(serch)); //필터
   
    return(
        <>
            <h1>게시판</h1>
             
            <input type="text" name="title" value={user.title}  placeholder="제목" onChange={onChangeHandler}/>
            <br/>
            <br/>
            <input type="text" name="detail"value={user.detail} placeholder="내용" onChange={onChangeHandler}/>
            <br/>
            <button onClick={onClicker}>게시</button>
            <br/>
            <input type="text" name="title" placeholder="검색" onChange={onChangeInclude}/>
            <ul>
                {filteredUsers.map((current)=>{
                        return (<>
                        <li>
                            <h1>{current.title}</h1>
                                {current.detail}
                                <input type="text" name="coment"value={coment.coment} placeholder="댓글" onChange={onChangeHandlerC(current.id)}/>
                                <br/>
                                <button onClick={onClickerC}>댓글개시</button>
                                <br/>
                                {comentl.map((a)=>{

                                    return <><li><br/>{a.coment}</li></>

                                })}

                        </li>
                        <button onClick={()=>ondelete(current.id)}>삭제</button>
                        
                      
                        </>
                    )})}
            </ul>
               
        </>
    )
}