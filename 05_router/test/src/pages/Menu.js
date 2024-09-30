import { getMenuList } from "../api/MenuApi";
import {useState, useEffect} from "react";
import MenuItem from "../components/MenuItem";
import {useNavigate} from "react-router-dom";
const Menu = () => {
    const [menuList,setMenuList] = useState([]);
    const [searchValue,setSearchValue] = useState('');
    const navigate = useNavigate();


    useEffect(()=>{
        setMenuList(getMenuList());
    },[]);



    return (
        <>
        <h1>메뉴</h1>
        {menuList.map(menu=>{
            return <MenuItem key={menu.id} menu={menu}/>
            })}
            <button>주문하기</button>
        </>
    )

}
export default Menu;