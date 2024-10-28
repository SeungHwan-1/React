import { Outlet } from "react-router-dom"
import Header from "../component/Header"
import Navbar from "../component/Navbar"


const Layouts = () => {
    return (
      <>
        <Header/>
        <Navbar/>
        <Outlet/>
      </>
    )
}
export default Layouts;