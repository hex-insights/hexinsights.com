import React from "react";
import Logo from "../../../../Components/Logo";
import CompanyName from "../../../../Components/CompanyName";
import "./style.css";


const LandingSection: React.FC = () => {
    return (
        <section className="landing">
            <div className="hero-container">
                <Logo animateOnMount/>
                <CompanyName animateOnMount wordFlow="column"/>
            </div>
        </section>
    )
}

export default LandingSection;
