import React from "react";
import Heading from "../../../../Components/Heading";


const ServicesSection: React.FC = () => {
    return (
        <section className="main-section services">
            <Heading id="services" level={ 2 }>What We Do</Heading>

            <section className="sub-section">
                <Heading level={ 3 }>Data Consulting</Heading>

                <p>
                    We dive in deep with you to understand your business, the issues it’s facing, and what questions you have about your own business and the broader market.
                </p>

                <p>
                    We map your company’s internal data structures in order to assess the current sphere of knowledge to which you are privy.
                    We additionally provide recommendations on additional sources of data that augment and improve your business.
                </p>

                <p>
                    Using this information we seek to shine a light on the known unknowns (the questions you have) and the unknown unknowns (areas of improvement or opportunity that you may not have been aware of) and provide you with deeper insight into your business and its market.
                </p>
            </section>

            <section className="sub-section">
                <Heading level={ 3 }>Custom Portal Development</Heading>

                <p>
                    We develop a custom data and process management hub that mirrors your company’s structure.
                    Integrations with external apps and in-portal functionality allow for centralization of data to power advanced insights.
                    This allows you to keep your favorite existing workflows in place, while replacing those that don’t satisfy your needs.
                </p>

                <p>
                    A custom portal allows you to automate tedious or error-prone procedures to let your people focus on what they do best.
                    Cross-platform and interdepartmental insights offer a more holistic approach to managing your company and lead to innovation and opportunity.
                    Automated alerts keep relevant parties up to date on everything they need to know.
                </p>
            </section>
        </section>
    )
}

export default ServicesSection;
