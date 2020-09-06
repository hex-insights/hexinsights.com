import React from "react";
import { isScrollPastLanding } from "../../Modules/scroll-utils";
import "./style.css";


const Header: React.FC = () => {
    const [showHeader, setShowHeader] = React.useState(isScrollPastLanding());

    React.useEffect(() => {
        function scrollHandler() {
            setShowHeader(isScrollPastLanding());
        }
        window.addEventListener("scroll", scrollHandler);
        return () => window.removeEventListener("scroll", scrollHandler);
    }, []);

    return (
        <header className={ showHeader ? "" : "hidden" }>
            <h1>Hex Insights</h1>
        </header>
    )
}

export default Header;
