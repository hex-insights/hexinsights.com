import React from "react";
import Heading from "../../../../Components/Heading";


const ProcessSection: React.FC = () => {
    return (
        <section className="main-section process">
            <Heading id="process" level={ 2 }>Our Process</Heading>

            <section className="sub-section">
                <Heading level={ 3 }>Exploration</Heading>

                <p>
                    We work with small to medium companies looking to transition for growth and up their technology level.
                    We meet with your team in order to understand your business and existing processes.
                    If we feel that our services are not a good fit for your business, we’ll help point you in the right direction.
                    If our team can provide value to yours, we explore the best options for you.
                </p>
            </section>

            <section className="sub-section">
                <Heading level={ 3 }>Data Consulting</Heading>

                <p>
                    With data consulting, we start with the questions you have and then dive in deep.
                    We compile a report for you to use as a reference when making strategy decisions that provides insight into the questions identified in the exploratory phase.
                </p>

                <p>
                    We also present any other findings, potential opportunities or areas of improvement, and data sources we find along the way.
                    We then discuss next steps, which may include ongoing data consulting or custom portal development.
                </p>
            </section>

            <section className="sub-section">
                <Heading level={ 3 }>Custom Portal Development</Heading>

                <p>
                    With custom portal development, we start with a data model of your organization and market, integrating any relevant data sources and applications you use.
                    We then build out the user interface and detailed permission and user management system so you can start to explore your data and view your organization through a new lense.
                </p>

                <p>
                    We also codify your internal processes to keep things running smoothly.
                    Your portal might trigger events in other applications you use or notify a different person when an action is required from them at each step of a process.
                </p>

                <p>
                    Using the data available, we move to building reports into the portal.
                    If we’ve done data consulting for you in the past, we work to create live versions of past reports for real-time access.
                    With basic reports in place, we move to advanced analytics and alerts.
                    This might include revenue forecasting, churn prediction, or client need identification.
                </p>
            </section>
        </section>
    )
}

export default ProcessSection;
