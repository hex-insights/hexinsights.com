import React from "react";
import { PageProps } from "gatsby";
import SEO from "../../Components/SEO";
import Layout from "../../Components/Layout";
import LandingSection from "./Sections/Landing";
import IntroSection from "./Sections/Intro";
import ServicesSection from "./Sections/Services";
import ProcessSection from "./Sections/Process";
import ContactSection from "./Sections/Contact";
import LocationContext from "../../Contexts/LocationContext";
import { PageTitle } from "../../Modules/page-utils";


export default function Home(props: PageProps) {
    const { location } = props;

    const pageTitle = PageTitle.HOME;

    return (
        <LocationContext.Provider value={ { ...location, pageTitle } }>
            <Layout mainClassName="home">
                <SEO title={ pageTitle }/>
                <LandingSection/>
                <IntroSection/>
                <ServicesSection/>
                <ProcessSection/>
                <ContactSection/>
            </Layout>
        </LocationContext.Provider>
    )
}
