import React from "react";
import Header from "../Header";
import SideBar from "../SideBar";
import Footer from "../Footer";
import WindowContext, { defaultWindowContext } from "../../Contexts/WindowContext";
import "./style.css";


export default function Layout({ children }) {
    const [windowHeight, setWindowHeight] = React.useState(window.innerHeight);

    React.useEffect(() => {
        function resizeHandler() {
            setWindowHeight(window.innerHeight);
        }

        window.addEventListener("resize", resizeHandler);
        window.addEventListener("orientationchange", resizeHandler);
        return () => {
            window.removeEventListener("resize", resizeHandler);
            window.removeEventListener("orientationchange", resizeHandler);
        }
    }, []);

    const windowContextValue = {
        windowHeight,
        vh: windowHeight / 100,
    }

    const style = { "--vh": `${windowContextValue.vh}px`  } as React.CSSProperties;

    return (
        <WindowContext.Provider value={ windowContextValue }>
            <div style={ style }>
                <Header/>

                <SideBar/>

                <main>
                    { children }
                </main>

                <Footer/>
            </div>
        </WindowContext.Provider>
    )
}
