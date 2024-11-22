import Link from "next/link";

const MenuItems = [
    {
        value: "About",
        link: "about",
    },
    {
        value: "Privacy Policy",
        link: "privacypolicy",
    },
    {
        value: "© 2024",
        link: "socials",
    },
];

const LandingFooter = () => {
    return (
        <div className="fixed p-4 bottom-0 w-full hidden md:block bg-black text-white">
            <div className="m-auto w-fit">
                <div className="flex gap-8">
                    {MenuItems.map((item, index) => (
                        <Link key={index} className="" href={item.link}>
                            {item.value}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default LandingFooter;