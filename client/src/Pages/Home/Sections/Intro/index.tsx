import React from "react";
import Heading from "../../../../Components/Heading";


const IntroSection: React.FC = () => {
    return (
        <section className="main-section intro">
            <Heading id="intro" level={ 2 }>Custom Fit</Heading>

            <section className="sub-section">
                <Heading level={ 3 }>Our Philosophy</Heading>

                <p>
                    We believe that every business is unique.
                    Each has its own set of goals, opportunities, and difficulties.
                    "One size fits all" solutions typically deliver only a near fit, rather than a perfect fit.
                    Our approach is centered on this idea and we bring it into every project we take on.
                    We work with your team to learn about the ins and outs of your business in order to serve you best.
                </p>

                <p>
                    We build fast, reliable, and scalable custom solutions specifically designed to meet your needs.
                    Using modern technology coupled with our expertise, we deliver powerful powerful results.
                </p>
            </section>
        </section>
    )
}

export default IntroSection;
