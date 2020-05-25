import React from "react";
import { Link } from "gatsby";
import "./style.css";


export type HeadingLevelType = 1 | 2 | 3 | 4 | 5 | 6;

type HeadingProps = {
    level: HeadingLevelType;
    id?: string;
    className?: string;
}

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";


const Heading: React.FC<HeadingProps> = ({ level, id, className, children }) => {
    const HComponent = `h${level}` as HeadingTag;

    const pathname = "/"; // TODO: find a way to get this dynamically

    return (
        <HComponent id={ id } className={ `heading ${className || ""}` }>
            { !!id && <Link to={ `${pathname}#${id}` }>x</Link> } { children }
        </HComponent>
    )
}

export default Heading;