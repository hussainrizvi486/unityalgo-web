import React from "react"

import { Header } from "../../_layout/header";
import { LandingSection } from "./_landing-sections/main-section";
import { ServicesSection } from "./_landing-sections/services-section";
// import { TechnologySection } from "./technologies-section";
import { ContactSection } from "./_landing-sections/contact-section";
import { Footer } from "../../_layout/footer";

const Index: React.FC = () => {
    return (
        <div className="bg-primary text-primary-foreground min-h-screen">
            <Header />
            <main>
                <LandingSection />
                <ServicesSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    )
}

export default Index;