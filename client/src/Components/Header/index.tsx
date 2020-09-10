import React from "react";
import CompanyName from "../CompanyName";
import LocationContext from "../../Contexts/LocationContext";
import { pagesWithHeaderHiddenAtTop } from "../../Modules/page-utils";
import { isScrollPastLanding } from "../../Modules/scroll-utils";
import { getDistance } from "../../Modules/math-utils";
import "./style.css";


const Header: React.FC = () => {
    const { pageTitle } = React.useContext(LocationContext);

    const setHasMounted = React.useState(false)[1];
    const [showHeader, setShowHeader] = React.useState(!pagesWithHeaderHiddenAtTop.includes(pageTitle) || isScrollPastLanding());
    const headerRef = React.useRef(null);

    React.useEffect(() => {
        setHasMounted(true);
    }, []);

    React.useEffect(() => {
        function scrollHandler() {
            setShowHeader(!pagesWithHeaderHiddenAtTop.includes(pageTitle) || isScrollPastLanding());
        }
        window.addEventListener("scroll", scrollHandler);
        return () => window.removeEventListener("scroll", scrollHandler);
    }, [pageTitle]);

    const headerWidth = headerRef.current !== null ? headerRef.current.getBoundingClientRect().width : 0;
    const headerHeight = 50;
    const sideBorderWidth = Math.sqrt(3) * headerHeight;
    const middleBorderLeftOffset = -3;
    const middleBorderWidth = headerWidth - 2 * middleBorderLeftOffset - sideBorderWidth;
    const headerStyle = {
        "--height": `${headerHeight}px`,
        "--side-border-width": `${sideBorderWidth}px`,
        "--middle-border-left-offset": `${middleBorderLeftOffset}px`,
        "--middle-border-width": `${middleBorderWidth}px`,
    } as React.CSSProperties;
    const sideBorderLength = getDistance(0, 0, sideBorderWidth, headerHeight);
    const sideBorderStyle = {"--path-length": sideBorderLength} as React.CSSProperties;
    const middleBorderStyle = {
        "--path-length": middleBorderWidth,
        "--negative-half-path-length": -1 * middleBorderWidth / 2,
    } as React.CSSProperties;

    return (
        <header ref={ headerRef } style={ headerStyle } className={ showHeader ? "" : "hidden" }>
            <h1>Hex Insights</h1> { /* For SEO */ }

            <CompanyName key={ showHeader.toString() } animateOnMount wordFlow="row"/>

            { showHeader && (
                <>
                    <div className="header-border-piece-container header-border-left-container">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox={ `0 0 ${sideBorderWidth} ${headerHeight}` }>
                            <g id="header-border-left" data-name="Side Bar Border Left">
                                <g id="header-border-left-inner">
                                    <polygon className="border-fill animate-on-mount" points={ `0 0 ${sideBorderWidth} 0 ${sideBorderWidth} ${headerHeight}` }/>
                                    <line style={ sideBorderStyle } className="border animate-on-mount" x1={ sideBorderWidth } y1={ headerHeight } x2="0" y2="0"/>
                                </g>
                            </g>
                        </svg>
                    </div>

                    <div className="header-border-piece-container header-border-middle-container">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox={ `0 0 ${middleBorderWidth} 1` }>
                            <g id="header-border-middle" data-name="Side Bar Border Middle">
                                <g id="header-border-middle-inner">
                                    <line style={ middleBorderStyle } className="border animate-on-mount" x1="0" y1="0.5" x2={ middleBorderWidth } y2="0.5"/>
                                </g>
                            </g>
                        </svg>
                    </div>

                    <div className="header-border-piece-container header-border-right-container">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox={ `0 0 ${sideBorderWidth} ${headerHeight}` }>
                            <g id="header-border-right" data-name="Side Bar Border Right">
                                <g id="header-border-right-inner">
                                    <polygon className="border-fill animate-on-mount" points={ `0 0 ${sideBorderWidth} 0 ${sideBorderWidth} ${headerHeight}` }/>
                                    <line style={ sideBorderStyle } className="border animate-on-mount" x1="0" y1="0" x2={ sideBorderWidth } y2={ headerHeight }/>
                                </g>
                            </g>
                        </svg>
                    </div>
                </>
            )}
        </header>
    )
}

export default Header;
