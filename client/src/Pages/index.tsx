import React from "react";
import { PageProps } from "gatsby";
import Home from "./Home";


export default function IndexPage(props: PageProps) {
    return (
        <Home { ...props }/>
    )
}
