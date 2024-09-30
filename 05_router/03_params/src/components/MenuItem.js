import "./MenuItem.css";
import {Link} from "react-router-dom";

const MenuItem = ({menu}) => {
    return (
        // /menu/1 이런식으로 날나옴 
        < Link to={`/menu/${menu.menuCode}`}> 
        <div className="MenuItem">
            <h3>이름 : {menu.menuName}</h3>
            <h3>가격 : {menu.menuPrice}</h3>
            <h3>종류 : {menu.categoryName}</h3>
        </div>
        </Link>
    )
}

export default MenuItem;