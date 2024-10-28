import {BrowserRouter, Route, Routes} from "react-router-dom";
import CounterPage from "./components/CounterPage";
import StatusPage from "./components/StatusPage";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CounterPage/>}/>
        <Route path="/status" element={<StatusPage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;


/*
    전역 상태 관리와 zustand

    전역 상태 관리의 적용
    - 여러 컴포넌트 간의 상태 공유가 필요할 때 - 여러 컴포넌트가 동일한 데이터에 접근하거나
    변경할 때
    - 복잡한 데이터의 흐름 시 - 데이터가 복잡하게 교차되거나 여러 단계를 거쳐야 할 때
    중앙 집중식으로 관리하기 위해
    - 상태의 지속성 - 사용자 인증 상태, 설정 정보 등 지속적으로 유지해야 하는 상태가
    있을 경우

    전역 상태 관리의 이점만 보고 사용하면 생기는 문제점..
    1. 복잡성 증가
    2. 성능 저하
    3. 디버깅의 어려움
    4. 재사용성 저하
    5. 의존성 문제

    - 지역적으로 처리 가능한 상태는 props로 관리하는 것이 좋다..
    특정 페이지나 모듈에 한정된 상태는 전역 관리 보다는 해당 페이지나 모듈 내에서
    관리하는 것이 더 적합할 수 있다..

*/