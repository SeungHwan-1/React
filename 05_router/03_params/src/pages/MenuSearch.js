import {useState,useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import { searchMenu } from "../api/MenuApi";
import MenuItem from "../components/MenuItem";
const MenuSearch = () => {
    const [search] = useSearchParams(); //배열구조분해할당

    const searchMenuName = search.get("menuName");
    const [MenuList,setMenuList] = useState([]);

    useEffect(()=>{
        setMenuList(searchMenu(searchMenuName));
    },[])

    return (
        <>
            <h1>검색 결과</h1>
            <div className="MenuBox">
                {MenuList.map(menu=>
                    <MenuItem key={menu.menuCode} menu={menu}/>
                )}
            </div>
        </>
    )


}

export default MenuSearch;