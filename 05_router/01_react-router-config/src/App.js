import About from "./pages/About";
import Main from "./pages/Main";
import {BrowserRouter} from "react-router-dom";
import {Routes ,Route } from "react-router-dom";
import Menu from "./pages/Menu";
function App() {

  /*
  npm install react-router-dom

  라우팅 : 
  어떤 요청을 어디로 안내 및 매핑을 할 것인지 정해놓고 진행하는 것으로 
  리액트에서는 요청에 따라 요청 된 컴포넌트를 렌더링한다

  browserRouter : 라우팅이 필요한 컴포넌트들을 감싸는 컴포넌트
  Routes : Route 를 묶어주는 컴포넌트
  Route : url 요청 주소와 컴포넌트를 매핑해주는 단위

  */
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/menu" element={<Menu/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
