import React from "react";
import Logo from "../../Components/Logo";
import { isScrollPastLanding } from "../../Modules/scroll-utils";
import WindowContext from "../../Contexts/WindowContext";
import "./style.css";


export default function SideBar() {
    const { windowHeight } = React.useContext(WindowContext);
    const [showTopIcon, setShowTopIcon] = React.useState(isScrollPastLanding());

    React.useEffect(() => {
        function scrollHandler() {
            setShowTopIcon(isScrollPastLanding());
        }
        window.addEventListener("scroll", scrollHandler);
        return () => window.removeEventListener("scroll", scrollHandler);
    }, []);

    const borderTopHeightPx = 81.61;

    const style = {"--border-top-height": `${borderTopHeightPx}px`} as React.CSSProperties;
    const topBorderStyle = {"--path-length": 129.14} as React.CSSProperties;
    const middleBorderLength = windowHeight - 2 * borderTopHeightPx + 2;
    const middleBorderContainerStyle = {height: `${middleBorderLength}px`} as React.CSSProperties;
    const middleBorderStyle = {
        "--path-length": middleBorderLength,
        "--negative-half-path-length": -1 * middleBorderLength / 2,
    } as React.CSSProperties;
    const bottomBorderStyle = {"--path-length": 129.14} as React.CSSProperties;
    const bottomHexagonStyle = {"--path-length": 121.77} as React.CSSProperties;

    return (
        <div style={ style } className="side-bar">
            { showTopIcon && <Logo size="small" animateOnMount/> }

            <div className="side-bar-border-piece-container side-bar-border-top-container">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 84.5 82.54">
                    <g id="side-bar-border-top" data-name="Side Bar Border Top">
                        <g id="side-bar-border-top-inner">
                            <polygon className="border-fill animate-on-mount" points="83.5 0.5 83.5 32.5 0.5 81.5 0.5 0.5 83.5 0.5"/>
                            <polyline style={ topBorderStyle } className="border animate-on-mount" points="0.77 82.11 84 33 84 0.5"/>
                        </g>
                    </g>
                </svg>
            </div>

            <div style={ middleBorderContainerStyle } className="side-bar-border-piece-container side-bar-border-middle-container">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox={ `0 0 1 ${windowHeight}` }>
                    <g id="side-bar-border-middle" data-name="Side Bar Border Middle">
                        <g id="side-bar-border-middle-inner">
                            <line style={ middleBorderStyle } className="border animate-on-mount" x1="0.5" x2="0.5" y2={ windowHeight }/>
                        </g>
                    </g>
                </svg>
            </div>

            <div className="side-bar-border-piece-container side-bar-border-bottom-container">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 84.5 121.43">
                    <g id="side-bar-border-bottom" data-name="Side Bar Border Middle">
                        <g id="side-bar-border-bottom-inner">
                            <polygon className="border-fill animate-on-mount" points="83.5 120.93 83.5 88.93 0.5 39.93 0.5 120.93 83.5 120.93"/>
                            <polyline style={ bottomBorderStyle } className="border animate-on-mount" points="0.77 39.33 84 88.43 84 120.93"/>
                            <polygon style={ bottomHexagonStyle } className="hexagon animate-on-mount" points="30.58 0.58 13 10.72 13 31.02 30.58 41.17 48.15 31.02 48.15 10.72 30.58 0.58"/>
                        </g>
                    </g>
                </svg>
            </div>
        </div>
    )
}
