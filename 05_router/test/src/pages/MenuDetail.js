import {useParams} from "react-router-dom";
import {useState,useEffect} from "react";
import { getMenuDetail } from "../api/MenuApi";
const MenuDetail = () =>
    {
        const {menuCode} = useParams();
        // url parameter라고 부른다 특정변수에 담기는
        const [menu,setMenu] = useState({
            name : "",
            price : "",
            description: ""
        });
    
        useEffect(()=>{
            console.log(menuCode);
            setMenu(getMenuDetail(menuCode));
            console.log(getMenuDetail(menuCode));
        },[])
    
        return (
            <>
                <h2>메뉴 상세 설명</h2>
                <h3>메뉴 이름 : {menu.name}</h3>
                <h3>메뉴 가격 : {menu.price}</h3>
                <h3>메뉴 설명 : {menu.description}</h3>
    
            </>
        )
    }
    export default MenuDetail;