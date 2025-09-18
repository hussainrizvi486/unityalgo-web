import { Header } from '../../_layout/header'
import { ContactSection } from '../(landing)/_landing-sections/contact-section'
import { Footer } from '../../_layout/footer'
import { ServicesSection } from '../(landing)/_landing-sections/services-section'
import { ProjectWorkflow } from './_components/project-workflow'
import { TechStack } from './_components/tech-section'

const Index = () => {
    return (
        <>
            <div className="bg-primary text-primary-foreground min-h-screen">
                <Header />
                <main>
                    <div>
                        <ServicesSection />
                    </div>
                    <div className='bg-white text-gray-900'>
                        <ProjectWorkflow />
                    </div>
                    <div className='bg-white text-gray-900'>
                        <TechStack />
                    </div>
                    
                    <div>
                        <ContactSection />
                    </div>
                </main>
                <Footer />
            </div>
        </>
    )
}

export default Index