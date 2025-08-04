"use client"
import * as React from "react"
import Link from "next/link"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const Navbar = () => {
    return (
        <header className="w-full bg-white shadow-md flex items-center justify-between px-4">
            <img src="/black.png" alt="Logo" height={50} width={50} />
            <NavigationMenu viewport={false}>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                            <Link href="/home" className="text-[1rem] hover:underline">Home</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                            <Link href="/about" className="text-[1rem] hover:underline">About</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                            <Link href="/works" className="text-[1rem] hover:underline">Works</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                            <Link href="/contact" className="text-[1rem] hover:underline">Contact</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </header>
    )
}
export default Navbar;
