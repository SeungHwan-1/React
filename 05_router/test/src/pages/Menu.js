import { getMenuList } from "../api/MenuApi";
import {useState, useEffect} from "react";
import MenuItem from "../components/MenuItem";
import {useNavigate} from "react-router-dom";
import { createContext, useContext } from "react";
import Order from "./Order";

const OrderContext = createContext(null);


export const Orderlist = () => {

const [orderlist,setOrderlsit] = useState([]);






}


const Menu = ({setOrder}) => {
    const [menuList,setMenuList] = useState([]);
    const [searchValue,setSearchValue] = useState('');
    const navigate = useNavigate();
   

    useEffect(()=>{
        setMenuList(getMenuList());


    },[]);
    useEffect(()=>{
        


    },[]);


    const handleClick = () => {
        navigate("../order");
      };
    const onClickHandler = (id) =>{
        console.log(id);
    }


    return (
        <>
       
        <h1>메뉴</h1>
        {menuList.map(menu=>{
            return <MenuItem key={menu.id} menu={menu}/>
            })}
            <button onClick={handleClick}>주문하기</button>
            
        </>
    )

}
export default Menu;