import React from "react";
import Header from "../Header";
import SideBar from "../SideBar";
import Footer from "../Footer";
import "./style.css";


const Layout: React.FC = ({ children }) => {
    return (
        <>
            <Header/>

            <SideBar/>

            <main>
                { children }
            </main>

            <Footer/>
        </>
    )
}

export default Layout;
