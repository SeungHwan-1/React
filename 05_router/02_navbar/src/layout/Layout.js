import {useState} from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import {Outlet} from "react-router-dom";


const Layout = ()=> {


    return (
        <>
        <Header/>
        <Navbar/>
        <Outlet/>
        </>
    )
}
export default Layout;
//outlet만 바뀌고 나머지는 고정된다구 생각하면 된다.