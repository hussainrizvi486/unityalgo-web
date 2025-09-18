import Link from "next/link";
import { navItems } from "../contants";

export const Header = () => {
    return (
        <header className="bg-primary">
            <div className="flex items-center justify-between max-w-6xl mx-auto py-4 px-2">
                <div className="flex items-center gap-2">
                    <img src="logo.png" alt="UnityAlgo" className="h-10 w-10 sm:h-12 sm:w-12" />
                    <div className="font-bold text-xl">UnityAlgo</div>
                </div>

                <div className="hidden md:flex md:items-center gap-3 ">
                    {navItems.map((item, index) =>
                        <Link
                            key={index}
                            href={item.url}
                            className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer font-medium`}
                        >
                            <span>{item.label}</span>
                        </Link>
                    )}
                </div>

                <div className="hidden md:flex">
                    <a href="#contact-section" className="">
                        <button
                            className="py-2 px-6 text-sm rounded-md font-semibold border-2 transition-colors cursor-pointer">
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