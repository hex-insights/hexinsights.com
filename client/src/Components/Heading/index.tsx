import React from "react";
import { Link } from "gatsby";
import "./style.css";


export type HeadingLevelType = 1 | 2 | 3 | 4 | 5 | 6;

type HeadingProps = {
    level: HeadingLevelType;
    id?: string;
    className?: string;
    children: React.ReactNode;
}

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";


export default function Heading(props: HeadingProps) {
    const { level, id, className, children } = props;

    const HComponent = `h${level}` as HeadingTag;

    const pathname = "/"; // TODO: find a way to get this dynamically

    return (
        <HComponent id={ id } className={ `heading ${className || ""} ${ !!id ? "linked" : ""}` }>
            { children } { !!id && <Link to={ `${pathname}#${id}` }><LinkIcon/></Link> }
        </HComponent>
    )
}


function LinkIcon() {
    return (
        <div className="link-icon-container">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 391 500.72">
                <g id="link-icon-container" data-name="Link Icon Container">
                    <g id="link-icon-container-inner">
                        <polygon className="hexagon" points="240 8.66 96.5 91.51 96.5 257.21 240 340.06 383.5 257.21 383.5 91.51 240 8.66"/>
                        <polygon className="hexagon" points="151 160.66 7.5 243.51 7.5 409.21 151 492.06 294.5 409.21 294.5 243.51 151 160.66"/>
                    </g>
                </g>
            </svg>
        </div>
    )
}