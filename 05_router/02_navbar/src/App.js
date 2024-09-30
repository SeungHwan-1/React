import {BrowserRouter,Routes,Route} from "react-router-dom";
import Layout from "./layout/Layout";
import Main from "./page/Main";
import Mypage from "./page/Mypage";
import Login from "./page/Login";

 // 타고들어와서 슬레시 레이아웃 

function App() {
  return (
<>
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Layout/>}> 
        <Route index element={<Main/>}/> 
        <Route path="main" element={<Main/>}/>  
        <Route path="mypage" element={<Mypage/>}/>  
        <Route path="login" element={<Login/>}/>  
      </Route>
    </Routes>
    </BrowserRouter>
</>
  );
}

export default App;
