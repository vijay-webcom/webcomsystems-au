'use client';

import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
} from '@/components/ui/menubar';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import cn from 'clsx';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { useState } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterest } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FiMenu } from 'react-icons/fi';
import Link from 'next/link';

export function MenubarDemo() {
    const { scrollY } = useScroll();
    const [isNavSticky, setIsNavSticky] = useState(false);
    useMotionValueEvent(scrollY, 'change', (latest) => {
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
            name: 'Web 3.0',
            url: '/web3-development-company/',
        },
        {
            name: 'Tech Remit',
            url: '/#techremit',
        },
        {
            name: 'Blockchain',
            url: '#',
            hasChildren: true,
            subLinks: [
                {
                    name: 'Blockchain Development',
                    url: '/blockchain-development-company/',
                    hasChildren: true,
                    subLinks: [
                        {
                            name: 'Blockchain Exchange Platform',
                            url: '/blockchain-exchange-platform/',
                        },
                        {
                            name: 'Blockchain in Healthcare',
                            url: '/blockchain-in-healthcare/',
                        },
                        {
                            name: 'Blockchain in Agriculture',
                            url: '/blockchain-in-agriculture/',
                        },
                        {
                            name: 'Blockchain Consulting Company',
                            url: '/blockchain-consulting-company/',
                        },
                        {
                            name: 'Ethereum Blockchain development Company',
                            url: '/ethereum-blockchain-development-company/',
                        },
                    ],
                },
                {
                    name: 'nft-token-development-services',
                    url: '/nft-token-development-services/',
                },
                {
                    name: 'ICO Development Company',
                    url: '/ico-development-company/',
                },
                {
                    name: 'metaverse',
                    url: '/metaverse-development-services/',
                },
                {
                    name: 'Dapps Development Company',
                    url: '/dapps-development-company/',
                },
                {
                    name: 'Web3 Dapp Development Company',
                    url: '/web3-dapp-development-company/',
                },
                {
                    name: 'Defi Staking Platform Development Company',
                    url: '/defi-staking-platform-development-company/',
                },
                {
                    name: 'Smart Contracts Development',
                    url: '/smart-contracts-development/',
                },
                {
                    name: 'Smart Contract Audit Company',
                    url: '/smart-contract-audit-company/',
                },
                {
                    name: 'Solidity Development Company',
                    url: '/solidity-development-company/',
                },
            ],
        },
        {
            name: 'Services',
            url: '#',
            hasChildren: true,
            subLinks: [
                {
                    name: 'Website Development',
                    url: '/website-development/',
                },
                {
                    name: 'Ecommerce Website Design',
                    url: '/ecommerce-website-design/',
                },
                {
                    name: 'Website Designing',
                    url: '/website-designing/',
                },
                {
                    name: 'Graphic Designing',
                    url: '/graphic-designing/',
                },
                {
                    name: 'Digital Marketing',
                    url: '/digital-marketing-adelaide/',
                },
                {
                    name: 'Social Media Marketing',
                    url: '/social-media-marketing/',
                },
                {
                    name: 'Search Engine Optimization',
                    url: '/seo-adelaide/',
                },
                {
                    name: 'Mobile Application Development',
                    url: '/mobile-application-development/',
                },
                {
                    name: 'Video Animation',
                    url: '/video-animation/',
                },
            ],
        },
        {
            name: 'Products',
            url: '#',
            hasChildren: true,
            subLinks: [
                {
                    name: 'Location Based',
                    url: '#',
                    hasChildren: true,
                    subLinks: [
                        {
                            name: 'Cab Booking Platform',
                            url: '/cab-booking-platform/',
                        },
                        {
                            name: 'Geo Fencing Based Application',
                            url: '/geo-fencing-based-application/',
                        },
                    ],
                },
                {
                    name: 'Fantasy Cricket Online',
                    url: '/ecommerce-website-design/',
                },
                {
                    name: 'Crash Games',
                    url: '/website-designing/',
                },
                {
                    name: 'School Management Software',
                    url: '/graphic-designing/',
                },
                {
                    name: 'Email Marketing Platform',
                    url: '/digital-marketing-adelaide/',
                },
                {
                    name: 'Digital Signature',
                    url: '/social-media-marketing/',
                },
            ],
        },
        {
            name: 'Fintech',
            url: '#',
            hasChildren: true,
            subLinks: [
                {
                    name: 'Money Transfer Software',
                    url: '/money-transfer-software/',
                },
                {
                    name: 'Trading Platform',
                    url: '/trading-platform/',
                },
                {
                    name: 'Order Matching Engine',
                    url: '/order-matching-engine/',
                },
                {
                    name: 'Golden Eye',
                    url: '/golden-eye/',
                },
                {
                    name: 'Fintech Software Development Company',
                    url: '/fintech-software-development-company/',
                },
            ],
        },
        {
            name: 'Contact',
            url: '#',
            hasChildren: true,
            subLinks: [
                {
                    name: 'Contact Us',
                    url: '/contact-us/',
                },
                {
                    name: 'About us',
                    url: '/about-us/',
                },
                {
                    name: 'Blog',
                    url: '/blog/',
                },
            ],
        },
    ];

    return (
        <>
            {/* Topbar UI */}
            <div className="bg-black px-2 py-2 md:px-0">
                <div className="align-center container mx-auto flex justify-between">
                    <div className="align-center flex justify-between gap-2">
                        <div className="mt-1 size-7 h-full opacity-40 md:size-9">
                            <Image src={'/au.png'} alt="AU" width={50} height={50} />
                        </div>
                        <div>
                            <p className="leading-tighter text-xs font-semibold text-[#00bfa5] md:text-sm">
                                Call us at:
                            </p>
                            <p className="leading-tighter text-xs text-white md:text-sm">
                                +61 490 820 818
                            </p>
                        </div>
                    </div>
                    <div className="align-center flex justify-between gap-2">
                        <FaFacebookF
                            className="transition-2s size-7 rounded-full bg-white/10 p-2 text-[#00bfa5] transition-all ease-in hover:bg-[#00bfa5] hover:text-white md:size-8"
                            size={30}
                        />
                        <FaXTwitter
                            className="transition-2s size-7 rounded-full bg-white/10 p-2 text-[#00bfa5] transition-all ease-in hover:bg-[#00bfa5] hover:text-white md:size-8"
                            size={30}
                        />
                        <FaInstagram
                            className="transition-2s size-7 rounded-full bg-white/10 p-2 text-[#00bfa5] transition-all ease-in hover:bg-[#00bfa5] hover:text-white md:size-8"
                            size={30}
                        />
                        <FaPinterest
                            className="transition-2s size-7 rounded-full bg-white/10 p-2 text-[#00bfa5] transition-all ease-in hover:bg-[#00bfa5] hover:text-white md:size-8"
                            size={30}
                        />
                        <FaLinkedinIn
                            className="transition-2s size-7 rounded-full bg-white/10 p-2 text-[#00bfa5] transition-all ease-in hover:bg-[#00bfa5] hover:text-white md:size-8"
                            size={30}
                        />
                    </div>
                </div>
            </div>

            {/* Website Header */}
            <motion.div
                transition={{ duration: 0.2 }}
                className={cn(
                    'z-10 w-full border-b border-white/10 px-2 py-2 md:px-0 md:py-4',
                    isNavSticky
                        ? 'fixed top-0 bg-white'
                        : 'absolute top-12 bg-transparent md:top-14',
                )}
            >
                <div className="align-center container mx-auto flex justify-between gap-4">
                    <div className="w-30 md:w-38">
                        <Image
                            src={isNavSticky ? '/logo.png' : '/logo-white.png'}
                            alt="logo"
                            width={200}
                            height={200}
                        />
                    </div>
                    <Menubar className="hidden lg:flex">
                        {navLinks.map((link) => (
                            <MenubarMenu key={link.name}>
                                <Link href={link.url}>
                                    <MenubarTrigger
                                        className={cn(
                                            'cursor-pointer',
                                            isNavSticky ? 'text-black' : 'text-white',
                                        )}
                                    >
                                        {link?.name}
                                        {link?.subLinks ? (
                                            <ChevronDown size={16} className="ms-1" />
                                        ) : null}
                                    </MenubarTrigger>
                                </Link>
                                {link?.subLinks ? (
                                    <MenubarContent>
                                        {link.subLinks.map((subLink) => {
                                            if (subLink.hasChildren && subLink.subLinks) {
                                                return (
                                                    <MenubarSub key={subLink.name + subLink.url}>
                                                        <MenubarSubTrigger
                                                            className={cn(
                                                                'cursor-pointer rounded-none border-b border-black/20 py-2 text-sm',
                                                            )}
                                                        >
                                                            {subLink.name}
                                                        </MenubarSubTrigger>

                                                        <MenubarSubContent>
                                                            {subLink.subLinks.map((child) => (
                                                                <MenubarItem
                                                                    key={child.name + child.url}
                                                                    className={cn(
                                                                        'cursor-pointer rounded-none border-b border-black/20 py-2 text-sm',
                                                                    )}
                                                                >
                                                                    <Link href={child.url}>
                                                                        {child.name}
                                                                    </Link>
                                                                </MenubarItem>
                                                            ))}
                                                        </MenubarSubContent>
                                                    </MenubarSub>
                                                );
                                            }

                                            return (
                                                <MenubarItem
                                                    key={subLink.name}
                                                    className={cn(
                                                        'font cursor-pointer rounded-none border-b border-black/20 py-2 text-sm',
                                                    )}
                                                >
                                                    <Link href={subLink.url}>{subLink.name}</Link>
                                                </MenubarItem>
                                            );
                                        })}
                                    </MenubarContent>
                                ) : null}
                            </MenubarMenu>
                        ))}
                    </Menubar>
                </div>
            </motion.div>

            {/* Mobile Header */}
            <div className="block lg:hidden">
                <Sheet key={'left'}>
                    <div className="relative container mx-auto">
                        <SheetTrigger
                            asChild
                            className={cn(
                                'top-3 z-11 md:top-6',
                                isNavSticky
                                    ? 'fixed right-2 sm:right-20 md:right-24'
                                    : 'absolute right-2 md:right-0',
                            )}
                        >
                            <FiMenu
                                size={25}
                                className={cn(isNavSticky ? 'text-black' : 'text-white')}
                            />
                        </SheetTrigger>
                        <SheetContent
                            side="left"
                            className="bg-[#154377] text-white data-[side=bottom]:max-h-[50vh] data-[side=top]:max-h-[50vh]"
                        >
                            <SheetHeader className="border-b border-white/10">
                                <SheetTitle>
                                    <Image
                                        className="w-30 md:w-38"
                                        src="/logo-white.png"
                                        alt="logo"
                                        width={150}
                                        height={100}
                                    />
                                </SheetTitle>
                            </SheetHeader>
                            <div className="no-scrollbar overflow-y-auto">
                                {navLinks.map((link) => (
                                    <div key={link.name} className="flex flex-col gap-2">
                                        {link?.subLinks ? (
                                            <Accordion
                                                type="single"
                                                collapsible
                                                defaultValue="shipping"
                                                className="max-w-full md:max-w-lg"
                                            >
                                                <AccordionItem value="shipping">
                                                    <AccordionTrigger className="md:text-md rounded-none border-b border-white/20 px-2 py-3 text-sm leading-tight font-semibold text-white transition-all duration-300 outline-none hover:text-neutral-100 focus:outline-0 md:px-5 md:py-4">
                                                        {link.name}
                                                    </AccordionTrigger>
                                                    <AccordionContent className="flex flex-col p-0">
                                                        {link?.subLinks?.map((subLink) => (
                                                            <Link
                                                                href={subLink.url}
                                                                key={subLink.name}
                                                                className="border-b border-white/10 bg-[#0b254254] px-3 py-2 text-xs leading-tight font-medium text-neutral-300 transition-all duration-300 hover:text-neutral-100 md:px-6 md:text-sm"
                                                            >
                                                                {subLink.name}
                                                            </Link>
                                                        ))}
                                                    </AccordionContent>
                                                </AccordionItem>
                                            </Accordion>
                                        ) : (
                                            <Link
                                                href={link.url}
                                                className="md:text-md border-b border-white/20 px-2 py-3 text-sm leading-tight font-semibold text-white transition-all duration-300 hover:text-neutral-100 md:px-5 md:py-4"
                                            >
                                                {link.name}
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </SheetContent>
                    </div>
                </Sheet>
            </div>
        </>
    );
}
