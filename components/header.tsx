import Link from "next/link";
import { navItems } from "@/global";
import { Brand } from "./brand";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

export const Header = () => {
    return (
        <header className="shadow-md">
            <div className="flex items-center justify-between max-w-6xl mx-auto py-4 px-2">
                <div className="flex items-center">
                    <Brand />

                    <div className="flex items-center gap-6 ml-8">

                        <Link

                            href="/about"
                            className="text-sm cursor-pointer font-medium"
                        >
                            About us
                        </Link>
                        <Link

                            href="/services"
                            className="text-sm cursor-pointer font-medium"
                        >
                            Services
                        </Link>

                        <Popover >
                            <PopoverTrigger asChild>
                                <div className="text-sm cursor-pointer font-medium">Products</div>
                            </PopoverTrigger>
                            <PopoverContent className="bg-white p-4" align="start">
                                <div>Point Of Sale</div>
                                <div>UnityStore </div>
                                <div>UnityAlgo Finance</div>
                                   <div>UnityAI For ERPNext</div>
                            </PopoverContent>
                        </Popover>
                        <Link
                            href="/contacts"
                            className="text-sm cursor-pointer font-medium"
                        >
                            Contact us
                        </Link>

                    </div>

                </div>
                <div className="hidden md:flex">
                    <a href="#contact-section" className="">
                        <button
                            className="py-2 px-8 text-sm rounded-full font-semibold border-2 transition-colors cursor-pointer bg-primary text-primary-foreground">
                            Let's Chat
                        </button>
                    </a>
                </div>

                <div className="md:hidden">
                    {/* <MenuBar /> */}
                </div>

            </div>
        </header>
    )
}