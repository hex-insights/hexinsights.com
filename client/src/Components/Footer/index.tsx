import React from "react";
import { getDistance } from "../../Modules/math-utils";
import useMounted from "../../Hooks/use-mounted";
import "./style.css";


const Footer: React.FC = () => {
    const isMounted = useMounted();
    const [footerWidth, setFooterWidth] = React.useState(0);
    const [footerHeight, setFooterHeight] = React.useState(0);
    const footerRef = React.useRef(null);

    const setFooterDimensions = React.useCallback(() => {
        const footerBoundingClientRect = footerRef.current !== null ? footerRef.current.getBoundingClientRect() : {};
        setFooterWidth(footerBoundingClientRect.width || 0);
        setFooterHeight(footerBoundingClientRect.height || 0);
    }, []);

    React.useEffect(() => {
        setFooterDimensions();
    }, [isMounted, setFooterDimensions]);

    React.useEffect(() => {
        window.addEventListener("resize", setFooterDimensions);
        window.addEventListener("orientationchange", setFooterDimensions);
        return () => {
            window.removeEventListener("resize", setFooterDimensions);
            window.removeEventListener("orientationchange", setFooterDimensions);
        }
    }, [setFooterDimensions]);

    const sideBorderWidth = Math.sqrt(3) * footerHeight;
    const middleBorderLeftOffset = -1;
    const middleBorderWidth = footerWidth - middleBorderLeftOffset;
    const footerStyle = {
        "--height": `${footerHeight}px`,
        "--side-border-width": `${sideBorderWidth}px`,
        "--middle-border-left-offset": `${middleBorderLeftOffset}px`,
        "--middle-border-width": `${middleBorderWidth}px`,
    } as React.CSSProperties;
    const sideBorderLength = getDistance(0, 0, sideBorderWidth, footerHeight);
    const sideBorderStyle = {"--path-length": sideBorderLength} as React.CSSProperties;
    const middleBorderStyle = {
        "--path-length": middleBorderWidth,
        "--negative-half-path-length": -1 * middleBorderWidth / 2,
    } as React.CSSProperties;

    return (
        <footer ref={ footerRef } style={ footerStyle }>
            <div className="footer-content">
                &copy; { new Date().getFullYear() } Hex Insights
            </div>

            <div className="footer-border-piece-container footer-border-left-container">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox={ `0 0 ${sideBorderWidth} ${footerHeight}` }>
                    <g id="footer-border-left" data-name="Side Bar Border Left">
                        <g id="footer-border-left-inner">
                            <polygon className="border-fill animate-on-mount" points={ `0 ${footerHeight} ${sideBorderWidth} 0 ${sideBorderWidth} ${footerHeight}` }/>
                            <line style={ sideBorderStyle } className="border animate-on-mount" x1={ sideBorderWidth } y1="0" x2="0" y2={ footerHeight }/>
                        </g>
                    </g>
                </svg>
            </div>

            <div className="footer-border-piece-container footer-border-middle-container">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox={ `0 0 ${middleBorderWidth} 1` }>
                    <g id="footer-border-middle" data-name="Side Bar Border Middle">
                        <g id="footer-border-middle-inner">
                            <line style={ middleBorderStyle } className="border animate-on-mount" x1="0" y1="0.5" x2={ middleBorderWidth } y2="0.5"/>
                        </g>
                    </g>
                </svg>
            </div>
        </footer>
    )
}

export default Footer;
