import { Suspense } from "react";
import { Spinner } from "./_components/ui/spinner";
import Index from "@/app/(features)/(pages)/(landing)/page";


const PageLoading = () => {
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <div>
        <Spinner />
        <div className='text-sm  font-medium mt-2'>Loading...</div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Suspense fallback={<PageLoading />}>
        <Index />
      </Suspense>
    </>
  );
}
