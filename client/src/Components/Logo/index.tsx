import React from "react";
import "./style.css";


type LogoProps = {
    animateOnMount: boolean;
}


export default function Logo(props: LogoProps) {
    const { animateOnMount } = props;

    // to get path lengths, find the relevant element and do `element.getTotalLength()`
    const iPathStyle = {"--path-length": 333.36} as React.CSSProperties;
    const innerHexStyle = {"--path-length": 181.95} as React.CSSProperties;
    const outerHexStyle = {"--path-length": 1022.99} as React.CSSProperties;

    return (
        <div className={ `logo-container ${animateOnMount ? "animate-on-mount" : ""}` }>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 296.31 342.15">
                <g id="logo" data-name="logo">
                    <g id="logo-inner">
                        <path
                            style={ iPathStyle }
                            className="logo-cls-1"
                            d="M148.37,174.4l-.23,166.68Z"
                        />
                        <polygon
                            style={ innerHexStyle }
                            className="logo-cls-2"
                            points="149.79 71.5 123.53 86.66 123.53 116.99 149.79 132.15 176.05 116.99 176.05 86.66 149.79 71.5"
                        />
                        <polygon
                            style={ outerHexStyle }
                            className="logo-cls-2"
                            points="148.16 0.58 0.5 85.83 0.5 256.33 148.16 341.58 295.81 256.33 295.81 85.83 148.16 0.58"
                        />
                    </g>
                </g>
            </svg>
        </div>
    )
}

Logo.defaultProps = {
    animateOnMount: false,
} as Partial<LogoProps>;
