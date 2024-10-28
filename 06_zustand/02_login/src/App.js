import {BrowserRouter, Routes, Route} from "react-router-dom";
import LoginPage from "./components/LoginPage";
import ProfilePage from "./components/ProfilePage";

function App() {
  return (
   <>
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/profile" element={<ProfilePage/>}/>
    </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
