import React from "react";
import "./style.css";


type LogoSize = "small" | "large";

type LogoProps = {
    size: LogoSize;
    animateOnMount: boolean;
}


export default function Logo(props: LogoProps) {
    const { size, animateOnMount } = props;

    return (
        <div className={ `logo-container ${animateOnMount ? "animate-on-mount" : ""} ${ size }` }>
            { size === "small" ? (
                <LogoSmallSVG/>
            ) : (
                <LogoLargeSVG/>
            )}
        </div>
    )
}

Logo.defaultProps = {
    size: "large",
    animateOnMount: false,
} as Partial<LogoProps>;


function LogoLargeSVG() {
    // to get path lengths, find the relevant element and do `element.getTotalLength()`
    const iPathStyle = {"--path-length": 333.36} as React.CSSProperties;
    const innerHexStyle = {"--path-length": 181.95} as React.CSSProperties;
    const outerHexStyle = {"--path-length": 1022.99} as React.CSSProperties;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 296.31 342.15">
            <g id="logo" data-name="logo">
                <g id="logo-inner">
                    <path
                        style={ iPathStyle }
                        className="i-line"
                        d="M148.37,174.4l-.23,166.68Z"
                    />
                    <polygon
                        style={ innerHexStyle }
                        className="hexagon"
                        points="149.79 71.5 123.53 86.66 123.53 116.99 149.79 132.15 176.05 116.99 176.05 86.66 149.79 71.5"
                    />
                    <polygon
                        style={ outerHexStyle }
                        className="hexagon"
                        points="148.16 0.58 0.5 85.83 0.5 256.33 148.16 341.58 295.81 256.33 295.81 85.83 148.16 0.58"
                    />
                </g>
            </g>
        </svg>
    )
}

function LogoSmallSVG() {
    const iPathStyle = {"--path-length": 26.31} as React.CSSProperties;
    const innerHexStyle = {"--path-length": 29.31} as React.CSSProperties;
    const outerHexStyle = {"--path-length": 164.77} as React.CSSProperties;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48.57 56.08">
            <g id="logo-small" data-name="Logo Small">
                <g id="logo-small-inner">
                    <line
                        style={ iPathStyle }
                        className="i-line"
                        x1="24.37" y1="28.58" x2="24.37" y2="54.88"
                    />
                    <polygon
                        style={ innerHexStyle }
                        className="hexagon"
                        points="24.51 12 20.28 14.44 20.28 19.33 24.51 21.77 28.74 19.33 28.74 14.44 24.51 12"
                    />
                    <polygon
                        style={ outerHexStyle }
                        className="hexagon"
                        points="24.28 0.58 0.5 14.31 0.5 41.77 24.28 55.5 48.07 41.77 48.07 14.31 24.28 0.58"
                    />
                </g>
            </g>
        </svg>

    )
}