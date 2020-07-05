import React from "react";
import Heading from "../../../../Components/Heading";


const ContactSection: React.FC = () => {
    return (
        <section className="contact">
            <Heading id="contact" level={ 2 }>Contact</Heading>

            <p>
                If you're ready to bring your organization to the next level, let's get in touch: <a href="mailto:info@hexinsights.com">info@hexinsights.com</a>.
            </p>
        </section>
    )
}

export default ContactSection;
