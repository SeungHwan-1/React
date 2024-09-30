import {BrowserRouter,Routes,Route} from "react-router-dom";
import Layout from "./layout/Layout";
import Main from "./pages/Main";
import Order from "./pages/Order";
import Menu from "./pages/Menu";
import MenuDetail from "./pages/MenuDetail";
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Main/>}/>
      <Route path="main" element={<Main/>}/>
      <Route path="order" element={<Order/>}/>
      <Route path="menu">
      <Route index element={<Menu/>}/>
      <Route path=":menuCode" element={<MenuDetail/>}/> 
       </Route>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
