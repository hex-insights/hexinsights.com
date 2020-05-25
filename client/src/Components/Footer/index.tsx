import React from "react";
import "./style.css";


const Footer: React.FC = () => {
    return (
        <footer>
            &copy; { new Date().getFullYear() } Hex Insights
        </footer>
    )
}

export default Footer;
