import React from "react";
import Header from "../Header";
import SideBar from "../SideBar";
import Footer from "../Footer";
import WindowContext from "../../Contexts/WindowContext";
import useMounted from "../../Hooks/use-mounted";
import "./style.css";


type LayoutProps = {
    mainClassName?: string;
    children: React.ReactNode;
}


export default function Layout(props: LayoutProps) {
    const { mainClassName, children } = props;

    const isMounted = useMounted();
    const [windowHeight, setWindowHeight] = React.useState(0);

    const updateWindowHeight = React.useCallback(() => {
        setWindowHeight(window.innerHeight);
    }, []);

    React.useEffect(() => {
        updateWindowHeight();
    }, [isMounted, updateWindowHeight]);

    React.useEffect(() => {
        window.addEventListener("resize", updateWindowHeight);
        window.addEventListener("orientationchange", updateWindowHeight);
        return () => {
            window.removeEventListener("resize", updateWindowHeight);
            window.removeEventListener("orientationchange", updateWindowHeight);
        }
    }, [updateWindowHeight]);

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

                <main className={ mainClassName }>
                    { children }
                </main>

                <Footer/>
            </div>
        </WindowContext.Provider>
    )
}
