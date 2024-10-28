import userAuthStore from "../store"
import {useNavigate} from "react-router-dom";

const ProfilePage = () => {
    const {isLogin, username, logout} = userAuthStore();
    const navi = useNavigate();

    return (
        <div style={{textAlign:'center', marginTop:'50px'}}>
            {isLogin? (
                <>
                    <h1>{username}님, 환영합니다!</h1>
                    <button onClick={logout}>로그아웃</button>
                </>
            ):(
                <>
                    <h1>로그인하지 않았습니다.</h1>
                    <button onClick={()=>navi('/')}>
                        로그인 하러 가기
                    </button>
                </>
            )}

        </div>
    )

}

export default ProfilePage;