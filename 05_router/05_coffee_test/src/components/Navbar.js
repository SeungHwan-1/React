import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" activeClassName="active">홈</NavLink>
        </li>
        <li>
          <NavLink to="/menu" activeClassName="active">메뉴</NavLink>
        </li>
        <li>
          <NavLink to="/order" activeClassName="active">주문 확인</NavLink>
        </li>
      </ul>
    </nav>
  );
}


export default Navbar;
