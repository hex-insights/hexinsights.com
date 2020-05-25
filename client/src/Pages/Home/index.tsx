import React from "react";
import SEO from "../../Components/SEO";
import Layout from "../../Components/Layout";
import LandingSection from "./Sections/Landing";
import IntroSection from "./Sections/Intro";
import ServicesSection from "./Sections/Services";
import ProcessSection from "./Sections/Process";
import ContactSection from "./Sections/Contact";


const Home: React.FC = () => {
    return (
        <Layout>
            <SEO title="Home"/>
            <LandingSection/>
            <IntroSection/>
            <ServicesSection/>
            <ProcessSection/>
            <ContactSection/>
        </Layout>
    )
}

export default Home;
