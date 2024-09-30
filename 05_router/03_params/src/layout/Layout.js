import Header from "../components/Header"
import Navbar from "../components/Navbar"
import {Outlet} from "react-router-dom";
const Layout = () => {

    return (
        <>
            <Header/>
            <Navbar/>
            <Outlet/>
        
        </>
    )
}
export default Layout;