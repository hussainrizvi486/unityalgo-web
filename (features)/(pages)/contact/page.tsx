import { Header } from '../../_layout/header'
import { ContactSection } from '../(landing)/_landing-sections/contact-section'
import { Footer } from '../../_layout/footer'

const Index = () => {
  return (
    <div className="bg-primary text-primary-foreground min-h-screen">
      <Header />
      <div>
        <ContactSection />
      </div>
      <Footer />
    </div>
  )
}

export default Index