import React from "react";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/app/_components/ui/sheet";

import { AlignJustify as MenuIcon, X as CloseIcon } from "lucide-react";
import { Brand } from "@/app/_components/brand";
import { navItems } from "./header";
import Link from 'next/link';


const MenuBar: React.FC = () => {

    return (
        <Sheet>

            <SheetTrigger asChild >
                <MenuIcon className="size-6" />
            </SheetTrigger>

            <SheetContent side="top" className="bg-primary text-primary-foreground px-2 py-4 border-none shadow-none">
                <div>
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <Brand />
                        </div>
                        <div>
                            <SheetClose asChild>
                                <div className="cursor-pointer">
                                    <CloseIcon />
                                </div>
                            </SheetClose>
                        </div>
                    </div>

                    <div className="px-2">
                        {
                            navItems.map((item, index) => (
                                <Link href={item.url} key={index} >
                                    <div className="text-sm mb-3 font-medium">
                                        {item.label}
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>


            </SheetContent>

        </Sheet>
    )
}

export { MenuBar };