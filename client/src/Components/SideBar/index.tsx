import React from "react";
import "./style.css";


const SideBar: React.FC = () => {
    const [windowHeight, setWindowHeight] = React.useState(window.innerHeight);

    React.useEffect(() => {
        function updateWindowHeight() {
            setWindowHeight(window.innerHeight);
        }

        window.addEventListener("resize", updateWindowHeight);
        return () => window.removeEventListener("resize", updateWindowHeight);
    }, []);

    const borderTopHeightPx = 49.61;
    const borderBottomHeightPx = 88.26;

    const style = {
        "--border-top-height": `${borderTopHeightPx}px`,
        "--border-bottom-height": `${borderBottomHeightPx}px`,
    } as React.CSSProperties;
    const topBorderStyle = {"--path-length": 96.64} as React.CSSProperties;
    const middleBorderLength = windowHeight - 2 * borderTopHeightPx + 2;
    const middleBorderStyle = {
        "--path-length": middleBorderLength,
        "--negative-half-path-length": -1 * middleBorderLength / 2, // calc() doesn't work in CSS keyframes definition
    } as React.CSSProperties;
    const bottomBorderStyle = {"--path-length": 96.64} as React.CSSProperties;
    const bottomHexagonStyle = {"--path-length": 121.77} as React.CSSProperties;

    return (
        <div style={ style } className="side-bar">
            <div className="side-bar-border-piece-container side-bar-border-top-container">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 84 50.54">
                    <g id="side-bar-border-top" data-name="Side Bar Border Top">
                        <g id="side-bar-border-top-inner">
                            <polyline className="triangle" points="0.5 49.5 0.5 0.5 83.5 0.5 83.5 1 0.27 50.11"/>
                            <line style={ topBorderStyle } className="border animate-on-mount" x1="0.27" y1="50.11" x2="83.5" y2="1"/>
                        </g>
                    </g>
                </svg>
            </div>

            <div className="side-bar-border-piece-container side-bar-border-middle-container">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox={ `0 0 1 ${windowHeight}` }>
                    <g id="side-bar-border-middle" data-name="Side Bar Border Middle">
                        <g id="side-bar-border-middle-inner">
                            <line style={ middleBorderStyle } className="border animate-on-mount" x1="0.5" x2="0.5" y2={ windowHeight }/>
                        </g>
                    </g>
                </svg>
            </div>

            <div className="side-bar-border-piece-container side-bar-border-bottom-container">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 84 89.34">
                    <g id="side-bar-border-bottom" data-name="Side Bar Border Middle">
                        <g id="ide-bar-border-bottom-inner">
                            <polyline className="triangle" points="0.5 39.84 0.5 88.84 83.5 88.84 83.5 88.34 0.27 39.23"/>
                            <line style={ bottomBorderStyle } className="border animate-on-mount" x1="0.27" y1="38.73" x2="83.5" y2="87.84"/>
                            <polygon style={ bottomHexagonStyle } className="hexagon animate-on-mount" points="30.08 0.58 12.5 10.72 12.5 31.02 30.08 41.17 47.65 31.02 47.65 10.72 30.08 0.58"/>
                        </g>
                    </g>
                </svg>
            </div>
        </div>
    )
}

export default SideBar;
