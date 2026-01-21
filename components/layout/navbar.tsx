"use client"

import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
} from "@/components/ui/menubar"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import cn from 'clsx';

import { motion, useScroll, useMotionValueEvent } from "motion/react"
import { useState } from "react"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export function MenubarDemo() {
    const { scrollY } = useScroll()
    const [isNavSticky, setIsNavSticky] = useState(false);
    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 100) {
            setIsNavSticky(true);
        } else {
            setIsNavSticky(false);
        }
    });

    const navLinks = [
        {
            name: "Web 3.0",
            url: "/web3-development-company/",
        },
        {
            name: "Tech Remit",
            url: "/#techremit",
        },
        {
            name: "Blockchain Development",
            url: "/blockchain-development-company/",
            hasChildren: true,
            subLinks: [
                {

                },
            ]
        },
    ]

    return (
        <>
            <div className="bg-black py-2">
                <div className="container mx-auto flex justify-between align-center">
                    <div className="flex justify-between align-center gap-2">
                        <div className="opacity-40 h-full mt-1">
                            <Image src={"/au.png"} alt="AU" width={34} height={20} />
                        </div>
                        <div>
                            <p className="text-sm text-[#00bfa5] leading-tighter font-semibold">
                                Call us at:
                            </p>
                            <p className="text-sm text-white leading-tighter">
                                +61 490 820 818
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-between align-center gap-2">
                        <FaFacebookF className="text-[#00bfa5] bg-white/10 rounded-full p-2 hover:bg-[#00bfa5] hover:text-white transition-all transition-2s ease-in" size={30} />
                        <FaXTwitter className="text-[#00bfa5] bg-white/10 rounded-full p-2 hover:bg-[#00bfa5] hover:text-white transition-all transition-2s ease-in" size={30} />
                        <FaInstagram className="text-[#00bfa5] bg-white/10 rounded-full p-2 hover:bg-[#00bfa5] hover:text-white transition-all transition-2s ease-in" size={30} />
                        <FaPinterest className="text-[#00bfa5] bg-white/10 rounded-full p-2 hover:bg-[#00bfa5] hover:text-white transition-all transition-2s ease-in" size={30} />
                        <FaLinkedinIn className="text-[#00bfa5] bg-white/10 rounded-full p-2 hover:bg-[#00bfa5] hover:text-white transition-all transition-2s ease-in" size={30} />
                    </div>
                </div>
            </div>

            <motion.div transition={{ duration: 0.2 }} className={cn("py-4 border-b border-white/10 w-full", isNavSticky ? "bg-white fixed top-0" : "absolute top-14 bg-transparent")}>
                <div className="container mx-auto flex justify-between align-center gap-4">
                    <Image src={isNavSticky ? "/logo.png" : "/logo-white.png"} alt="logo" width={150} height={24} />
                    <Menubar>
                        <MenubarMenu>
                            <MenubarTrigger className={cn(isNavSticky ? "text-black" : "text-white")}> Web 3.0 <ChevronDown size={16} className="ms-1" /></MenubarTrigger>
                            <MenubarContent>
                                <MenubarItem>
                                    New Tab
                                </MenubarItem>
                                <MenubarItem>
                                    New Window
                                </MenubarItem>
                                <MenubarSub>
                                    <MenubarSubTrigger>Share</MenubarSubTrigger>
                                    <MenubarSubContent>
                                        <MenubarItem>Email link</MenubarItem>
                                        <MenubarItem>Messages</MenubarItem>
                                        <MenubarItem>Notes</MenubarItem>
                                    </MenubarSubContent>
                                </MenubarSub>
                            </MenubarContent>
                        </MenubarMenu>
                        <MenubarMenu>
                            <MenubarTrigger className={cn(isNavSticky ? "text-black" : "text-white")}>Tech Remit <ChevronDown size={16} className="ms-1" /></MenubarTrigger>
                            <MenubarContent>
                                <MenubarItem>
                                    New Tab
                                </MenubarItem>
                                <MenubarItem>
                                    New Window
                                </MenubarItem>
                                <MenubarSub>
                                    <MenubarSubTrigger>Share</MenubarSubTrigger>
                                    <MenubarSubContent>
                                        <MenubarItem>Email link</MenubarItem>
                                        <MenubarItem>Messages</MenubarItem>
                                        <MenubarItem>Notes</MenubarItem>
                                    </MenubarSubContent>
                                </MenubarSub>
                            </MenubarContent>
                        </MenubarMenu>
                        <MenubarMenu>
                            <MenubarTrigger className={cn(isNavSticky ? "text-black" : "text-white")}>Blockchain <ChevronDown size={16} className="ms-1" /></MenubarTrigger>
                            <MenubarContent>
                                <MenubarItem>
                                    New Tab
                                </MenubarItem>
                                <MenubarItem>
                                    New Window
                                </MenubarItem>
                                <MenubarSub>
                                    <MenubarSubTrigger>Share</MenubarSubTrigger>
                                    <MenubarSubContent>
                                        <MenubarItem>Email link</MenubarItem>
                                        <MenubarItem>Messages</MenubarItem>
                                        <MenubarItem>Notes</MenubarItem>
                                    </MenubarSubContent>
                                </MenubarSub>
                            </MenubarContent>
                        </MenubarMenu>
                        <MenubarMenu>
                            <MenubarTrigger className={cn(isNavSticky ? "text-black" : "text-white")}>Services <ChevronDown size={16} className="ms-1" /></MenubarTrigger>
                            <MenubarContent>
                                <MenubarItem>
                                    New Tab
                                </MenubarItem>
                                <MenubarItem>
                                    New Window
                                </MenubarItem>
                                <MenubarSub>
                                    <MenubarSubTrigger>Share</MenubarSubTrigger>
                                    <MenubarSubContent>
                                        <MenubarItem>Email link</MenubarItem>
                                        <MenubarItem>Messages</MenubarItem>
                                        <MenubarItem>Notes</MenubarItem>
                                    </MenubarSubContent>
                                </MenubarSub>
                            </MenubarContent>
                        </MenubarMenu>
                        <MenubarMenu>
                            <MenubarTrigger className={cn(isNavSticky ? "text-black" : "text-white")}>Products <ChevronDown size={16} className="ms-1" /></MenubarTrigger>
                            <MenubarContent>
                                <MenubarItem>
                                    New Tab
                                </MenubarItem>
                                <MenubarItem>
                                    New Window
                                </MenubarItem>
                                <MenubarSub>
                                    <MenubarSubTrigger>Share</MenubarSubTrigger>
                                    <MenubarSubContent>
                                        <MenubarItem>Email link</MenubarItem>
                                        <MenubarItem>Messages</MenubarItem>
                                        <MenubarItem>Notes</MenubarItem>
                                    </MenubarSubContent>
                                </MenubarSub>
                            </MenubarContent>
                        </MenubarMenu>
                        <MenubarMenu>
                            <MenubarTrigger className={cn(isNavSticky ? "text-black" : "text-white")}>Fintech <ChevronDown size={16} className="ms-1" /></MenubarTrigger>
                            <MenubarContent>
                                <MenubarItem>
                                    New Tab
                                </MenubarItem>
                                <MenubarItem>
                                    New Window
                                </MenubarItem>
                                <MenubarSub>
                                    <MenubarSubTrigger>Share</MenubarSubTrigger>
                                    <MenubarSubContent>
                                        <MenubarItem>Email link</MenubarItem>
                                        <MenubarItem>Messages</MenubarItem>
                                        <MenubarItem>Notes</MenubarItem>
                                    </MenubarSubContent>
                                </MenubarSub>
                            </MenubarContent>
                        </MenubarMenu>
                        <MenubarMenu>
                            <MenubarTrigger className={cn(isNavSticky ? "text-black" : "text-white")}>Contact <ChevronDown size={16} className="ms-1" /></MenubarTrigger>
                            <MenubarContent>
                                <MenubarItem>
                                    New Tab
                                </MenubarItem>
                                <MenubarItem>
                                    New Window
                                </MenubarItem>
                                <MenubarSub>
                                    <MenubarSubTrigger>Share</MenubarSubTrigger>
                                    <MenubarSubContent>
                                        <MenubarItem>Email link</MenubarItem>
                                        <MenubarItem>Messages</MenubarItem>
                                        <MenubarItem>Notes</MenubarItem>
                                    </MenubarSubContent>
                                </MenubarSub>
                            </MenubarContent>
                        </MenubarMenu>
                    </Menubar>
                </div>
            </motion.div >
        </>
    )
}
