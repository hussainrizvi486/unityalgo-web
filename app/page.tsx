import { Suspense } from "react";
import { Spinner } from "@/components/ui/spinner";
import { Header } from "@/components/header";
import { ServiceSection } from "@/components/services-section";
import { cn } from "@/utils";
import { Footer } from "@/components/footer";


const PageLoading = () => {
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <div>
        <Spinner />
        <div className='font-medium mt-4'>Loading...</div>
      </div>
    </div>
  )
}



const LandingSection = () => {
  return (
    <div >
      <div className={cn("",
        "[background-size:40px_40px]",
        "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",)}>
        <div className="max-w-6xl mx-auto relative">

          <div className="flex justify-between">
            <div className="py-16">
              <div className="mb-8">
                <div className="text-4xl mb-4 font-black">
                  Transform your business with world-class software solutions.
                </div>
                <div>
                  We are your trusted development partner with just one goal in focus to build products that generate a lasting, profitable impact.
                </div>
              </div>

              <div>
                <button className="bg-primary text-white py-3 px-6 rounded-md font-medium">Let's Discuss </button>
              </div>

            </div>
            <div>
              <img src="https://folio3.com/wp-content/uploads/2022/03/Bigcommerce-logo-added.webp" alt="" />
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}
const Page = () => {
  return (
    <>
      <Suspense fallback={<PageLoading />}>
        <Header />
        <LandingSection />
        <ServiceSection />
        {/* <PageLoading /> */}
        <Footer />
      </Suspense>
    </>
  );
}




export default Page;