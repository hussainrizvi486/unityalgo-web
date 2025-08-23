// 'use client';
import Link from 'next/link';
import { Footer } from '../../_layout/footer';
import { ContactSection } from '../(landing)/_landing-sections/contact-section';
import { navItems } from '../../_layout/header';
import { MenuBar } from "../../_layout/menu-bar";
import { ProjectWorkflow } from '../services/_components/project-workflow';
import { TechStack } from '../services/_components/tech-section';
import { BenefitSection } from '../services/_components/benefit';
import { ServicesSection } from '../(landing)/_landing-sections/services-section';

const Header = () => {

  return (

    <header>

      <div className="flex items-center justify-between max-w-6xl mx-auto py-4 px-2">

        <Link href="/">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="UnityAlgo" className="h-10 w-10 sm:h-12 sm:w-12" />
            <div className="font-bold text-xl">UnityAlgo</div>
          </div>
        </Link>

        <div className="hidden md:flex md:items-center gap-4 ">
          {navItems.map((item, index) =>

            <Link href={item.url}
              key={index}
              className="flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer font-medium"
            >
              <div className="group inline-block">
                <span className="relative cursor-pointer">
                  {item.label}
                  <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-blue-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </span>
              </div>
            </Link>
          )}
        </div>

        <div className="hidden md:flex">
          <a href="/contact" className="">
            <button
              className="py-2 px-6 text-sm font-semibold bg-primary text-primary-foreground rounded-2xl cursor-pointer overflow-hidden" >

              <span className="block transition-transform duration-300 transform hover:-translate-y-1">
                Let's Chat
              </span>
            </button>
          </a>
        </div>

        <div className="md:hidden">
          <MenuBar />
        </div>
      </div>
    </header>
  )
}

type About = {
  title: string;
  description: string;
  image: string;
};

const about: About[] = [
  {
    image: "https://cdn-icons-png.flaticon.com/128/3176/3176298.png",
    title: "Our Vision",
    description:
      "At UnityAlgo, we are passionate about building technology that inspires progress. Our vision is to create digital solutions that simplify challenges and open new possibilities for businesses and individuals.",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/18706/18706141.png",
    title: "Our Approach",
    description:
      "With a focus on innovation, scalability, and user experience, we design and develop software that delivers real impact. Every solution we craft is built with precision, creativity, and a forward-thinking mindset.",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/128/7178/7178931.png",
    title: "Our Commitment",
    description:
      "What makes us different is our commitment to excellence and collaboration. At UnityAlgo, we don’t just deliver technology—we create experiences that empower growth and shape the future.",
  },
];



const Index = () => {
  return (

    <>
      <head><title>About Us – UnityAlgo </title></head>
      <div className="bg-white text-black  min-h-screen" >
        <div className='block md:hidden'>
          <Header />
        </div>
        <main className=''>
          <div className="relative bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-md"></div>

            <div className='relative z-10'>

              <div className='hidden md:block  text-black bg-white transition ease-in duration-300'>
                <Header />
              </div>


              <div className='max-w-6xl mx-auto px-4 py-16'>
                <div className='mb-6'>
                  <div className='text-2xl md:text-3xl font-bold mb-3 text-primary-foreground '>
                    About Us
                  </div>
                  <div className='text-sm text-primary-foreground'>
                    At UnityAlgo, we specialize in creating innovative software solutions that drive growth and simplify complexity. With a focus on modern technology, scalability, and user experience, we help businesses transform ideas into impactful digital products.
                  </div>
                </div>


                <div className='mb-12'>
                  <a href="#contact-section" className="">
                    <button className='bg-primary text-primary-foreground px-6 py-2.5 text-sm font-semibold rounded-md cursor-pointer hover:bg-primary/90'>
                      Let's Chat
                    </button>
                  </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {about.map((about, idx) => (
                    <div
                      key={idx}
                      className="text-center bg-white rounded-xl p-6 shadow-md transform hover:-translate-y-1 hover:shadow-md transition duration-300">
                      <div className="flex items-center justify-center w-16 h-16 rounded-full mx-auto mb-4">
                        <img src={about.image} alt="" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2 text-shadow-accent">
                        {about.title}
                      </h3>
                      <p className="text-sm">{about.description}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>


          <div className='mt-6'>
            <ServicesSection />
          </div>

          <div className='mt-6'>
            <ProjectWorkflow />
          </div>

          <div className='mt-6'>
            <TechStack />
          </div>

          <div className='py-16 mt-6 bg-primary text-primary-foreground'>
            <ContactSection />
          </div>

        </main >
        <Footer />
      </div >
    </>
  )
}
export default Index



