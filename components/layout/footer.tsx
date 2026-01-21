import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-white">
            <div className="pt-16 mx-auto container">
                <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
                    <div className="md:max-w-md lg:col-span-2">
                        <Link
                            href="/"
                            aria-label="Go home"
                            title="Company"
                            className="inline-flex items-center"
                        >
                            <Image src={"/logo.png"} alt="logo" width={150} height={24} />
                        </Link>

                        <div className="mt-4 lg:max-w-sm">
                            <p className="text-sm text-gray-600">
                                We well understand that to win today you need tomorrow&apos;s innovative digital technologies. That&apos;s exactly here at Webcom Systems we envision to deliver. We specialize in developing frictionless IT solutions that are build to precisely fit the clients need, budget and time frame. In short, we have all sorts of digital solutions that you need to power your digital platforms.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
                        {[
                            {
                                title: "Category",
                                links: ["News", "World", "Games", "References"],
                            },
                            {
                                title: "Business",
                                links: ["Web", "eCommerce", "Business", "Entertainment", "Portfolio"],
                            },
                            {
                                title: "Apples",
                                links: ["Media", "Brochure", "Nonprofit", "Educational", "Projects"],
                            },
                            {
                                title: "Cherry",
                                links: ["Infopreneur", "Personal", "Wiki", "Forum"],
                            },
                        ].map((section) => (
                            <div key={section.title}>
                                <p className="font-semibold tracking-wide text-gray-800">
                                    {section.title}
                                </p>
                                <ul className="mt-2 space-y-2">
                                    {section.links.map((link) => (
                                        <li key={link}>
                                            <Link
                                                href="/"
                                                className="text-gray-600 transition-colors duration-300 hover:text-purple-600"
                                            >
                                                {link}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col justify-between pt-5 pb-10 border-t sm:flex-row">
                    <p className="text-sm text-gray-600">
                        © {new Date().getFullYear()} Company Inc. All rights reserved.
                    </p>

                    <div className="flex items-center mt-4 space-x-4 sm:mt-0">
                        {["twitter", "instagram", "facebook"].map((icon) => (
                            <Link
                                key={icon}
                                href="/"
                                className="text-gray-500 transition-colors duration-300 hover:text-purple-600"
                                aria-label={icon}
                            >
                                <span className="capitalize">{icon}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
