"use client"

import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
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
import Link from "next/link";

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

    type BaseLink = {
        name: string;
        url: string;
    };

    type ParentLink = BaseLink & {
        hasChildren: true;
        subLinks: NavLink[];
    };

    type ChildLink = BaseLink & {
        hasChildren?: false;
        subLinks?: never;
    };

    type NavLink = ParentLink | ChildLink;

    const navLinks: NavLink[] = [
        {
            name: "Web 3.0",
            url: "/web3-development-company/",
        },
        {
            name: "Tech Remit",
            url: "/#techremit",
        },
        {
            name: "Blockchain",
            url: "#",
            hasChildren: true,
            subLinks: [
                {
                    name: "Blockchain Development",
                    url: "/blockchain-development-company/",
                    hasChildren: true,
                    subLinks: [
                        {
                            name: "Blockchain Exchange Platform",
                            url: "/blockchain-exchange-platform/",
                        },
                        {
                            name: "Blockchain in Healthcare/",
                            url: "/blockchain-in-healthcare/",
                        },
                        {
                            name: "Blockchain in Agriculture/",
                            url: "/blockchain-in-agriculture/",
                        },
                        {
                            name: "Blockchain Consulting Company/",
                            url: "/blockchain-consulting-company/",
                        },
                        {
                            name: "Ethereum Blockchain development Company/",
                            url: "/ethereum-blockchain-development-company/",
                        },
                    ]
                },
                {
                    name: "nft-token-development-services",
                    url: "/nft-token-development-services/",
                },
                {
                    name: "ICO Development Company",
                    url: "/ico-development-company/",
                },
                {
                    name: "metaverse",
                    url: "/metaverse-development-services/",
                },
                {
                    name: "Dapps Development Company/",
                    url: "/dapps-development-company/",
                },
                {
                    name: "Web3 Dapp Development Company",
                    url: "/web3-dapp-development-company/",
                },
                {
                    name: "Defi Staking Platform Development Company",
                    url: "/defi-staking-platform-development-company/",
                },
                {
                    name: "Smart Contracts Development",
                    url: "/smart-contracts-development/",
                },
                {
                    name: "Smart Contract Audit Company",
                    url: "/smart-contract-audit-company/",
                },
                {
                    name: "Solidity Development Company/",
                    url: "/solidity-development-company/",
                },
            ]
        },
        {
            name: "Services",
            url: "#",
            hasChildren: true,
            subLinks: [
                {
                    name: "Website Development",
                    url: "/website-development/",
                },
                {
                    name: "Ecommerce Website Design",
                    url: "/ecommerce-website-design/",
                },
                {
                    name: "Website Designing",
                    url: "/website-designing/",
                },
                {
                    name: "Graphic Designing",
                    url: "/graphic-designing/",
                },
                {
                    name: "Digital Marketing",
                    url: "/digital-marketing-adelaide/",
                },
                {
                    name: "Social Media Marketing",
                    url: "/social-media-marketing/",
                },
                {
                    name: "Search Engine Optimization",
                    url: "/seo-adelaide/",
                },
                {
                    name: "Mobile Application Development",
                    url: "/mobile-application-development/",
                },
                {
                    name: "Video Animation",
                    url: "/video-animation/",
                },
            ]
        },
        {
            name: "Products",
            url: "#",
            hasChildren: true,
            subLinks: [
                {
                    name: "Location Based",
                    url: "#",
                    hasChildren: true,
                    subLinks: [
                        {
                            name: "Cab Booking Platform",
                            url: "/cab-booking-platform/",
                        },
                        {
                            name: "Geo Fencing Based Application",
                            url: "/geo-fencing-based-application/",
                        },
                    ]
                },
                {
                    name: "Fantasy Cricket Online",
                    url: "/ecommerce-website-design/",
                },
                {
                    name: "Crash Games",
                    url: "/website-designing/",
                },
                {
                    name: "School Management Software",
                    url: "/graphic-designing/",
                },
                {
                    name: "Email Marketing Platform",
                    url: "/digital-marketing-adelaide/",
                },
                {
                    name: "Digital Signature",
                    url: "/social-media-marketing/",
                },
            ],
        },
        {
            name: "Fintech",
            url: "#",
            hasChildren: true,
            subLinks: [
                {
                    name: "Money Transfer Software",
                    url: "/money-transfer-software/",
                },
                {
                    name: "Trading Platform",
                    url: "/trading-platform/",
                },
                {
                    name: "Order Matching Engine",
                    url: "/order-matching-engine/",
                },
                {
                    name: "Golden Eye",
                    url: "/golden-eye/",
                },
                {
                    name: "Fintech Software Development Company",
                    url: "/fintech-software-development-company/",
                },
            ]
        },
        {
            name: "Contact",
            url: "#",
            hasChildren: true,
            subLinks: [
                {
                    name: "Contact Us",
                    url: "/contact-us/",
                },
                {
                    name: "About us",
                    url: "/about-us/",
                },
                {
                    name: "Blog",
                    url: "/blog/",
                },
            ]
        },
    ];

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
                        {
                            navLinks.map((link) => (
                                <MenubarMenu key={link.name}>
                                    <Link href={link.url}>
                                        <MenubarTrigger className={cn("cursor-pointer", isNavSticky ? "text-black" : "text-white")}>
                                            {link?.name}
                                            {
                                                link?.subLinks ? <ChevronDown size={16} className="ms-1" /> : null
                                            }
                                        </MenubarTrigger>
                                    </Link>
                                    {
                                        link?.subLinks ? (
                                            <MenubarContent>
                                                {link.subLinks.map((subLink) => {
                                                    if (subLink.hasChildren && subLink.subLinks) {
                                                        return (
                                                            <MenubarSub key={subLink.name + subLink.url}>
                                                                <MenubarSubTrigger className={cn("cursor-pointer text-sm border-b border-black/20 rounded-none py-2")}>
                                                                    {subLink.name}
                                                                </MenubarSubTrigger>

                                                                <MenubarSubContent>
                                                                    {subLink.subLinks.map((child) => (
                                                                        <MenubarItem key={child.name + child.url} className={cn("cursor-pointer text-sm border-b border-black/20 rounded-none py-2")}>
                                                                            <Link href={child.url}>{child.name}</Link>
                                                                        </MenubarItem>
                                                                    ))}
                                                                </MenubarSubContent>
                                                            </MenubarSub>
                                                        )
                                                    }

                                                    return (
                                                        <MenubarItem key={subLink.name} className={cn("cursor-pointer text-sm border-b border-black/20 rounded-none py-2")}>
                                                            <Link href={subLink.url}>{subLink.name}</Link>
                                                        </MenubarItem>
                                                    )
                                                })}
                                            </MenubarContent>
                                        ) : null
                                    }
                                </MenubarMenu>
                            ))
                        }
                    </Menubar>
                </div>
            </motion.div >
        </>
    )
}
