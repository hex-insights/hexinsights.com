import React from "react";
import "./style.css";

type CompanyNameProps = {
    animateOnMount: boolean;
    wordFlow: "row" | "column";
}


export default function CompanyName(props: CompanyNameProps) {
    const { animateOnMount, wordFlow } = props;

    return (
        <div className={ `company-name-container word-flow-${wordFlow}` }>
            <CompanyNameHex animateOnMount={ animateOnMount }/>
            <CompanyNameInsights animateOnMount={ animateOnMount }/>
        </div>
    )
}


CompanyName.defaultProps = {
    animateOnMount: false,
    wordFlow: "row",
} as Partial<CompanyNameProps>;


type CompanyNameWordProps = {
    animateOnMount: boolean;
}


export function CompanyNameHex(props: CompanyNameWordProps) {
    const { animateOnMount } = props;

    const letterAnimationOrders = React.useMemo(() => getLetterAnimationOrders(3, 3), []);

    const hPathStyle = {"--path-length": 294.80, "--letter-animation-order": letterAnimationOrders[0]} as React.CSSProperties;
    const ePathStyle = {"--path-length": 290.0, "--letter-animation-order": letterAnimationOrders[1]} as React.CSSProperties;
    const xPathStyle = {"--path-length": 274.90, "--letter-animation-order": letterAnimationOrders[2]} as React.CSSProperties;

    return (
        <div className={ `company-name-word-container company-name-hex-container ${animateOnMount ? "animate-on-mount" : ""}` }>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 185 55">
                <g id="company-name-hex" data-name="Company Name Hex">
                    <g id="company-name-hex-inner">
                        <path
                            className="company-name-letter"
                            style={ hPathStyle }
                            d="M0,0H1V26.5H39.4V0h1V54h-1V27.5H1V54H0Z"
                        />
                        <path
                            className="company-name-letter"
                            style={ ePathStyle }
                            d="M109.7,54H76V0h33.7V1H77V26.1h24.6v1H77V53h32.7Z"
                        />
                        <path
                            className="company-name-letter"
                            style={ xPathStyle }
                            d="M141.3,54h-1V49.5c0-2.9-.1-5.5,1.5-7.7l12-16.4-12-16.2c-1.5-2.1-1.5-4.8-1.5-7.7V0h1V1.5c0,2.8,0,5.4,1.4,7.3l12,16.2h11.9L178.2,8.8c1.3-1.9,1.4-4.5,1.4-7.3V0h1V1.5c0,2.9,0,5.6-1.5,7.7L167.3,25.6l11.8,16.2c1.5,2.1,1.5,4.8,1.5,7.7V54h-1V49.5c0-2.8,0-5.4-1.4-7.3L166.5,26h-12L142.7,42.2c-1.3,1.8-1.4,4.5-1.4,7.3Z"
                        />
                    </g>
                </g>
            </svg>
        </div>
    )
}


CompanyNameHex.defaultProps = {
    animateOnMount: false,
} as Partial<CompanyNameWordProps>


export function CompanyNameInsights(props: CompanyNameWordProps) {
    const { animateOnMount } = props;

    const letterAnimationOrders = React.useMemo(() => getLetterAnimationOrders(8, 5), []);

    const i1PathStyle = {"--path-length": 233.20, "--letter-animation-order": letterAnimationOrders[0]} as React.CSSProperties;
    const nPathStyle = {"--path-length": 332.03, "--letter-animation-order": letterAnimationOrders[1]} as React.CSSProperties;
    const s1PathStyle = {"--path-length": 274.03, "--letter-animation-order": letterAnimationOrders[2]} as React.CSSProperties;
    const i2PathStyle = {"--path-length": 233.20, "--letter-animation-order": letterAnimationOrders[3]} as React.CSSProperties;
    const gPathStyle = {"--path-length": 267.88, "--letter-animation-order": letterAnimationOrders[4]} as React.CSSProperties;
    const hPathStyle = {"--path-length": 294.80, "--letter-animation-order": letterAnimationOrders[5]} as React.CSSProperties;
    const tPathStyle = {"--path-length": 192, "--letter-animation-order": letterAnimationOrders[6]} as React.CSSProperties;
    const s2PathStyle = {"--path-length": 274.08, "--letter-animation-order": letterAnimationOrders[7]} as React.CSSProperties;

    return (
        <div className={ `company-name-word-container company-name-insights-container ${animateOnMount ? "animate-on-mount" : ""}` }>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 510.4 55">
                <g id="company-name-insights" data-name="Company Name Insights">
                    <g id="company-name-insights-inner">
                        <path
                            className="company-name-letter"
                            style={ i1PathStyle }
                            d="M0,54.1v-1H15.5V1.1H0V.1H31.8v1H16.5v52H31.8v1Z"
                        />
                        <path
                            className="company-name-letter"
                            style={ nPathStyle }
                            d="M103.1,42.3V.1h1v54h-1V43.8L65.3,1.4c-.2-.2-.3-.3-.5-.3s-.2.2-.2.3V54.1h-1V1.2A1.15,1.15,0,0,1,64.8,0c.6,0,.8.2,1.5.9Z"
                        />
                        <path
                            className="company-name-letter"
                            style={ s1PathStyle }
                            d="M169.9,1.1H147.7c-5.6,0-9.2,3.4-9.2,8.1v8.2c0,4.7,2,6.1,5.1,6.7l21.1,4.3c4,.8,6.9,2.8,6.9,9.8V44c0,5.9-4.3,10.1-11.1,10.1H135.6v-1h24.9c6.2,0,10.1-3.8,10.1-9.1V38.2c0-6.3-2.4-8-6.1-8.8l-21.1-4.3c-3.5-.7-5.9-2.2-5.9-7.7V9.2c0-5.3,4-9.1,10.2-9.1h22.2Z"
                        />
                        <path
                            className="company-name-letter"
                            style={ i2PathStyle }
                            d="M200.8,54.1v-1h15.5V1.1H200.8V.1h31.8v1H217.3v52h15.3v1Z"
                        />
                        <path
                            className="company-name-letter"
                            style={ gPathStyle }
                            d="M263.7,41.2v-28c0-9.5,3.2-13.1,16-13.1H297v1H279.7c-11.8,0-15,3.2-15,12.1v28c0,8.7,3.5,11.9,17,11.9h18.9V34h1V54.1H281.7C267,54.1,263.7,50.5,263.7,41.2Z"
                        />
                        <path
                            className="company-name-letter"
                            style={ hPathStyle }
                            d="M335.5.1h1V26.6h38.4V.1h1v54h-1V27.6H336.5V54.1h-1Z"
                        />
                        <path
                            className="company-name-letter"
                            style={ tPathStyle }
                            d="M426,1.1H405.5V.1h42v1H427v53h-1Z"
                        />
                        <path
                            className="company-name-letter"
                            style={ s2PathStyle }
                            d="M507.7,1.1H485.5c-5.6,0-9.21,3.4-9.21,8.1v8.2c0,4.7,2,6.1,5.11,6.7l21.1,4.3c4,.8,6.9,2.8,6.9,9.8V44c0,5.9-4.3,10.1-11.1,10.1H473.39v-1H498.3c6.2,0,10.1-3.8,10.1-9.1V38.2c0-6.3-2.4-8-6.1-8.8l-21.1-4.3c-3.5-.7-5.91-2.2-5.91-7.7V9.2c0-5.3,4-9.1,10.21-9.1h22.2Z"
                        />
                    </g>
                </g>
            </svg>
        </div>
    )
}


CompanyNameInsights.defaultProps = {
    animateOnMount: false,
} as Partial<CompanyNameWordProps>


function getLetterAnimationOrders(numLetters: number, maxOrder: number): number[] {
    return new Array(numLetters).fill(null).map(e => Math.random() * maxOrder);
}
