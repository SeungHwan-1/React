import { NavLink } from "react-router-dom"


const Navbar = () => {
  const activeStyle = {
    backgroundColor:"purple",
    color:"white"
  }

  return (
    <div>
      <ul>
        <li>
          <NavLink to="/main" style={({isActive}) => isActive? activeStyle:null}>HOME</NavLink>
          <NavLink to="/mypage" style={({isActive}) => isActive? activeStyle:null}>마이페이지</NavLink>
          <NavLink to="/login" style={({isActive}) => isActive? activeStyle:null}>로그인</NavLink>
        </li>
      </ul>
    </div>
  )

}

export default Navbar;