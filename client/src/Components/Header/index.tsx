import React from "react";
import "./style.css";


const Header: React.FC = () => {
    const [showHeader, setShowHeader] = React.useState(false);

    const updateShowHeader = React.useCallback(() => {
        if (window.scrollY >= window.innerHeight) {
            setShowHeader(true);
        } else {
            setShowHeader(false);
        }
    }, []);

    React.useEffect(() => {
        updateShowHeader();
    }, []);

    React.useEffect(() => {
        function scrollHandler() {
            updateShowHeader();
        }
        window.addEventListener("scroll", scrollHandler);
        return () => window.removeEventListener("scroll", scrollHandler);
    }, [updateShowHeader]);

    return (
        <header className={ showHeader ? "" : "hidden" }>
            <h1>Hex Insights</h1>
        </header>
    )
}

export default Header;
