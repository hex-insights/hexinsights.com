import React from "react";
import { PageProps } from "gatsby";
import SEO from "../../Components/SEO";
import Layout from "../../Components/Layout";
import LandingSection from "../../PageComponents/Home/Landing";
import IntroSection from "../../PageComponents/Home/Intro";
import ServicesSection from "../../PageComponents/Home/Services";
import ProcessSection from "../../PageComponents/Home/Process";
import ContactSection from "../../PageComponents/Home/Contact";
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
