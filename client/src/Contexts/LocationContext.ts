import React from "react";
import { PageTitle } from "../Modules/page-utils";


type HistoryContextValue = {
    key?: string;
    pathname: string;
    search: string;
    hash: string;
    href: string;
    origin: string;
    host: string;
    port: string;
    protocol: string;
    state: any;
    pageTitle: PageTitle;
}


export const defaultHistoryContext: HistoryContextValue = {
    key: "",
    pathname: "",
    search: "",
    hash: "",
    href: "",
    origin: "",
    host: "",
    port: "",
    protocol: "",
    state: null,
    pageTitle: PageTitle.DEFAULT,
}

const HistoryContext = React.createContext(defaultHistoryContext);

export default HistoryContext;
