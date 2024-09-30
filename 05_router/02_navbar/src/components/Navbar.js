import {NavLink} from "react-router-dom";

const Navbar = () => {
    const activeStyle = {
        backgroundColor : "blue"
    }
// to 안에 우리가 요청날릴 슬래쉬
// true일때 액티브스타일 폴스일때 그냥 isActive 선택된거 있으면 트루..
    return (
        <div>
            <h1>navabar</h1>
            <ul>
                <li><NavLink to={"/"} 
                style={({isActive})=> isActive?activeStyle:undefined}>home</NavLink></li> 
                <li><NavLink to={"/main"} 
                style={({isActive})=> isActive?activeStyle:undefined}>main</NavLink></li> 
                <li><NavLink to={"/mypage"} 
                style={({isActive})=> isActive?activeStyle:undefined}>mypage</NavLink></li>
                <li><NavLink to={"/login"} 
                style={({isActive})=> isActive?activeStyle:undefined}>login</NavLink></li>    
            </ul>
        </div>
    )
}

export default Navbar;