import {Link} from "react-router-dom";

const MenuItem = ({menu}) => {
    return (
        <Link to={`/menu/${menu.id}`}>
            <div>
            <li>{menu.name} 
            {menu.price}원 
           </li>
            </div>
        </Link>
    )



}

export default MenuItem;