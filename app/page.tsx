import { Suspense } from "react";
import { Spinner } from "@/components/ui/spinner";
import { Header } from "@/components/header";
import { ServiceSection } from "@/components/services-section";
import { cn } from "@/utils";
import { Footer } from "@/components/footer";
import { LandingPage } from "@/components/pages/landing-page";


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

const Page = () => {
  return (
    <>
      <Suspense fallback={<PageLoading />}>
        <LandingPage />
        <ServiceSection />
        {/* <PageLoading /> */}
        <Footer />
      </Suspense>
    </>
  );
}




export default Page;