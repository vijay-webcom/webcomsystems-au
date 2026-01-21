import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterest, FaWhatsapp } from "react-icons/fa";
import { FaArrowRightLong, FaXTwitter } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
const Footer = () => {
    type BaseLink = {
        name: string;
        url: string;
    };

    const ourServices: BaseLink[] = [
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
    ];

    const products: BaseLink[] = [
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
    ];

    const corporate: BaseLink[] = [
        {
            name: "About Us",
            url: "/about-us/",
        },
        {
            name: "Contact Us",
            url: "/contact-us/",
        },
        {
            name: "Blog",
            url: "/blog/",
        },
        {
            name: "Privacy Policy",
            url: "/privacy-policy/",
        },
        {
            name: "Terms & Conditions",
            url: "/terms-and-conditions/",
        },
        {
            name: "Risk Disclosure",
            url: "/risk-disclosure/",
        },
    ];

    const locationBased: BaseLink[] = [
        {
            name: "Cab Booking Platform",
            url: "/cab-booking-platform/",
        },
        {
            name: "GEO Fencing Based Application",
            url: "/geo-fencing-based-application/",
        },
    ];

    const blockchainSoftwares: BaseLink[] = [
        {
            name: "Blockchain Development Company",
            url: "/blockchain-development-company/",
        },
        {
            name: "Blockchain Exchange Platform",
            url: "/blockchain-exchange-platform/",
        },
        {
            name: "Blockchain Consulting Company",
            url: "/blockchain-consulting-company/",
        },
    ];

    const fintechSoftwares: BaseLink[] = [
        {
            name: "Order Matching Engine",
            url: "/order-matching-engine/",
        },
        {
            name: "Trading Platform",
            url: "/trading-platform/",
        },
        {
            name: "Golden Eye",
            url: "/golden-eye/",
        },
        {
            name: "Money Transfer Software",
            url: "/money-transfer-software/",
        },
    ];

    return (
        <footer className="bg-[#071229] relative">
            <div className="pt-18 mx-auto container px-4 md:px-0">
                <div className="grid gap-0 md:gap-16 row-gap-4 mb-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <div className="sm:col-span-2 md:col-span-1">
                        <div className="mb-4 md:mb-8 border-b border-white/15 pb-4 md:pb-8">
                            <Link
                                href="/"
                                aria-label="Go home"
                                title="Company"
                                className="inline-flex items-center"
                            >
                                <Image src={"/logo.png"} alt="logo" width={200} height={65} />
                            </Link>

                            <div className="mt-4 lg:max-w-sm">
                                <p className="text-sm text-[#858b99]">
                                    We well understand that to win today you need tomorrow&apos;s innovative digital technologies. That&apos;s exactly here at Webcom Systems we envision to deliver. We specialize in developing frictionless IT solutions that are build to precisely fit the clients need, budget and time frame. In short, we have all sorts of digital solutions that you need to power your digital platforms.
                                </p>
                            </div>
                        </div>
                        <div className="mb-4 md:mb-8 border-b border-white/15 pb-4 md:pb-8">
                            <FooterLinksHeader name="Careers" />
                            <ul className="mt-2">
                                <li >
                                    <Link
                                        href="/career/"
                                        className="text-[#858b99] text-sm transition-all leading-tight duration-300 hover:text-neutral-100"
                                    >
                                        Current Openings {" "} <span className="text-xs text-white bg-red-600 py-0 px-1 leading-normal">We&apos;re Hiring</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="mb-4 md:mb-8 border-b border-white/15 pb-4 md:pb-8">
                            <FooterLinksHeader name="The Trust We&apos;ve Earned" />
                            <div className="mt-2">
                                <Image src={"/review1.png"} alt="logo" width={200} height={88} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="mb-4">
                            <FooterLinksHeader name="Our Services" />
                            <ul className="mt-2">
                                {ourServices.map((item: BaseLink) => (
                                    <FooterLinks name={item.name} url={item.url} key={item.name} />
                                ))}
                            </ul>
                        </div>
                        <div className="mb-4">
                            <FooterLinksHeader name="Corporate" />
                            <ul className="mt-2">
                                {corporate.map((item: BaseLink) => (
                                    <FooterLinks name={item.name} url={item.url} key={item.name} />
                                ))}
                            </ul>
                        </div>
                        <div className="mb-4">
                            <FooterLinksHeader name="Location Based" />
                            <ul className="mt-2">
                                {locationBased.map((item: BaseLink) => (
                                    <FooterLinks name={item.name} url={item.url} key={item.name} />
                                ))}
                            </ul>
                        </div>
                        <div className="mb-4 md:mb-0">
                            <Image src={"/top-software-development-companies.svg"} alt="logo" width={163} height={170} />
                        </div>
                    </div>
                    <div>
                        <div className="mb-4">
                            <FooterLinksHeader name="Products" />
                            <ul className="mt-2">
                                {products.map((item: BaseLink) => (
                                    <FooterLinks name={item.name} url={item.url} key={item.name} />
                                ))}
                            </ul>
                        </div>

                        <div className="mb-4">
                            <FooterLinksHeader name="Blockchain Softwares" />
                            <ul className="mt-2">
                                {blockchainSoftwares.map((item: BaseLink) => (
                                    <FooterLinks name={item.name} url={item.url} key={item.name} />
                                ))}
                            </ul>
                        </div>

                        <div className="mb-4 md:mb-8 border-b border-white/15 pb-4 md:pb-8">
                            <FooterLinksHeader name="Fintech Softwares" />
                            <ul className="mt-2">
                                {fintechSoftwares.map((item: BaseLink) => (
                                    <FooterLinks name={item.name} url={item.url} key={item.name} />
                                ))}
                            </ul>
                        </div>

                        <div className="mb-4 md:mb-0">
                            <FooterLinksHeader name="Keep up with us." />
                            <ul className="mt-2">
                                <li className="text-[#858b99] text-sm transition-all leading-tight duration-300 hover:text-neutral-100">
                                    Join our mailing list to receive news and announcements.
                                </li>
                            </ul>
                            <div className="relative mt-4">
                                <input type="email" name="email" placeholder="Enter Your Email Address" className="bg-white/7 px-4 py-3  w-full rounded-sm text-white placeholder:text-[#858b99] text-sm focus:outline-none pr-12 " />
                                <button className="absolute right-0 top-1/2 transform -translate-y-1/2 p-3 cursor-pointer">
                                    <FaArrowRightLong size={20} className="text-[#858b99] hover:text-neutral-100" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="mb-4">
                            <FooterLinksHeader name="Australia Address:" />
                            <ul className="mt-2">
                                <li className="text-[#858b99] text-sm transition-all leading-tight duration-300 hover:text-neutral-100">
                                    GHD Building , Level 5 68 GRENFELL street CBD Adelaide 5000
                                </li>
                                <li >
                                    <Link
                                        href="tel:+61490820818"
                                        className="text-[#858b99] text-sm transition-all leading-tight duration-300 hover:text-neutral-100"
                                    >+61 490 820 818
                                    </Link>
                                </li>
                                <li >
                                    <Link
                                        href="mailto:sales@webcomsystems.com.au"
                                        className="text-[#858b99] text-sm transition-all leading-tight duration-300 hover:text-neutral-100"
                                    >sales@webcomsystems.com.au
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="mb-0 md:mb-8 border-0 md:border-b md:border-white/15 pb-4 md:pb-8">
                            <FooterLinksHeader name="Office Timings:" />
                            <ul className="mt-2">
                                <li className="text-[#858b99] text-sm transition-all leading-tight duration-300 hover:text-neutral-100">
                                    10 am to 6 pm (Monday to Friday)
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center pt-5 pb-6 border-t border-white/15">
                <div className="mx-auto container">
                    <div className="flex justify-center align-center gap-3">
                        <FaFacebookF className="text-[#858b99] bg-white/10 rounded-full p-2 hover:text-[#00bfa5] transition-all transition-2s ease-in" size={32} />
                        <FaXTwitter className="text-[#858b99] bg-white/10 rounded-full p-2 hover:text-[#00bfa5] transition-all transition-2s ease-in" size={32} />
                        <FaInstagram className="text-[#858b99] bg-white/10 rounded-full p-2 hover:text-[#00bfa5] transition-all transition-2s ease-in" size={32} />
                        <FaPinterest className="text-[#858b99] bg-white/10 rounded-full p-2 hover:text-[#00bfa5] transition-all transition-2s ease-in" size={32} />
                        <FaLinkedinIn className="text-[#858b99] bg-white/10 rounded-full p-2 hover:text-[#00bfa5] transition-all transition-2s ease-in" size={32} />
                    </div>
                    <p className="text-sm text-[#858b99] text-center mt-4">
                        © {new Date().getFullYear()} Webcom Systems Pty Ltd. All Rights Reserved.
                    </p>
                </div>
            </div>

            <div className="fixed bottom-6 right-6 flex gap-3 flex-col">
                <Link href="tel:+61490820818" className="size-12 bg-[#18c9b0] rounded-full flex justify-center items-center">
                    <IoCall className="text-white" size={30} />
                </Link>
                <Link href="https://wa.me/61490820818" target="_blank" className="size-12 bg-[#4dc247] rounded-full flex justify-center items-center">
                    <FaWhatsapp className="text-white" size={30} />
                </Link>
            </div>
        </footer>
    );
};

export const FooterLinksHeader = ({ name }: { name: string }) => {
    return (
        <h6 className="text-base font-bold text-neutral-100">{name}</h6>
    )
}

export const FooterLinks = ({ name, url }: { name: string, url: string }) => {
    return (
        <li key={name}>
            <Link
                href={url}
                className="text-[#858b99] text-sm transition-all leading-tight duration-300 hover:text-neutral-100"
            >
                {name}
            </Link>
        </li>
    )
}

export default Footer;
