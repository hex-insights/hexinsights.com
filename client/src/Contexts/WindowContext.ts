import React from "react";

export const defaultWindowContext = {
    windowHeight: 0,
    vh: 0,
}

const WindowContext = React.createContext(defaultWindowContext);

export default WindowContext;
