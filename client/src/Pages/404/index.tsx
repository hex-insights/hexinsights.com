import React from "react";
import { PageProps, Link } from "gatsby";
import SEO from "../../Components/SEO";
import Layout from "../../Components/Layout";
import LocationContext from "../../Contexts/LocationContext";
import { PageTitle } from "../../Modules/page-utils";
import "./style.css";


export default function NotFoundPage(props: PageProps) {
    const { location } = props;

    const pageTitle = PageTitle.NOT_FOUND;

    const headingContent = "Not Found";

    return (
        <LocationContext.Provider value={ { ...location, pageTitle } }>
            <Layout mainClassName="not-found">
                <SEO title={ pageTitle }/>
                <div className="not-found-content">
                    <div className="title">
                        <h1 className="glitch-text" data-text={ headingContent }>{ headingContent }</h1>
                    </div>

                    <div className="link-suggestions">
                        Return To: <Link to="/">Home Page</Link>
                    </div>
                </div>
            </Layout>
        </LocationContext.Provider>
    )
}
