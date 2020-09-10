import React from "react";
import Heading from "../../../Components/Heading";


export default function ContactSection() {
    return (
        <section className="main-section contact">
            <Heading id="contact" level={ 2 }>Contact</Heading>

            <p>
                If you've got an interesting project and you're ready to bring your organization to the next level, let's get in touch: <a href="mailto:Hex Insights <info@hexinsights.com>">info@hexinsights.com</a>.
            </p>
        </section>
    )
}
