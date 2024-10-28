import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layouts from "./layouts/Layouts";
import Main from "./page/Main";
import Mypage from "./page/Mypage";
import Login from "./page/Login";
import Error from "./page/Error";


/*  etc (et cetera) : "기타" 또는 **"그 외의 것들"**을 의미 */


function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layouts/>}>
              <Route index element={<Main/>}/>
              <Route path="main" element={<Main/>}/>
              <Route path="mypage" element={<Mypage/>}/>
              <Route path="login" element={<Login/>}/>
            </Route>
            <Route path="*" element={<Error/>}/>   
             {/* 존재하지 않는 요청 처리 
            "*"는 와일드카드 경로를 의미한다. 정의된 다른 경로와 일치하지 않는 모든 경로에 대해 이 라우트가 매칭*/}
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
