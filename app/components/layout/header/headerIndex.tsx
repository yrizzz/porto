import { NavLink } from "@remix-run/react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@heroui/react";
import { useState } from "react";
import ThemeSwitcher from "./themeSwitcher";

export const AcmeLogo = () => {
    return (
        <svg style={{ width: '30px' }} viewBox="-6.4 -6.4 76.80 76.80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="inline-block iconify iconify--emojione" preserveAspectRatio="xMidYMid meet" fill="#000000" transform="matrix(-1, 0, 0, 1, 0, 0)">
            <g id="SVGRepo_bgCarrier" strokeWidth="0">
                <path transform="translate(-6.4, -6.4), scale(4.8)" fill="#7ed0ec" d="M9.166.33a2.25 2.25 0 00-2.332 0l-5.25 3.182A2.25 2.25 0 00.5 5.436v5.128a2.25 2.25 0 001.084 1.924l5.25 3.182a2.25 2.25 0 002.332 0l5.25-3.182a2.25 2.25 0 001.084-1.924V5.436a2.25 2.25 0 00-1.084-1.924L9.166.33z" strokeWidth="0"></path>
            </g>
            <g id="SVGRepo_iconCarrier">
                <circle cx="32" cy="32" r="30" fill="#000000"></circle>
                <path d="M38 17.5h6.9l-9.7 18.1v10.9h-6.1V35.6l-10-18.1h7.1l6 12.6L38 17.5z" fill="#ffffff"></path>
            </g>
        </svg>
    );
};

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuItems = [
        { name: "Home", to: "/" },
        { name: "Projects", to: "/projects" },
        { name: "Rest Api", to: "/rest-api" }, // Update to actual path
        { name: "Blogs", to: "/blogs" }, // Update to actual path
        { name: "Pages", to: "/pages" } // Update to actual path
    ];

    return (
        <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} maxWidth="xl">
            <NavbarBrand className="cursor-pointer">
                <NavLink
                    to="/">
                    <AcmeLogo/>
                    <p className="font-bold text-inherit inline-block">rizzz</p>
                </NavLink>
            </NavbarBrand>
            <NavbarContent className="hidden xl:flex" justify="center">
                <NavbarItem>
                    <NavLink
                        to="/"
                        className={({ isActive }) => isActive ? "text-blue-500" : "text-foreground"
                        }
                    >
                        Home
                    </NavLink>
                </NavbarItem>
                <NavbarItem>
                    <NavLink
                        to="/projects"
                        className={({ isActive }) => isActive ? "text-blue-500" : "text-foreground"
                        }
                    >
                        Projects
                    </NavLink>
                </NavbarItem>
                <NavbarItem>
                    <NavLink
                        to="/rest-api"
                        className={({ isActive }) => isActive ? "text-blue-500" : "text-foreground"
                        }
                    >
                        Rest Api
                    </NavLink>
                </NavbarItem>
                <NavbarItem>
                    <NavLink
                        to="/blogs"
                        className={({ isActive }) => isActive ? "text-blue-500" : "text-foreground"
                        }
                    >
                        Blogs
                    </NavLink>
                </NavbarItem>
                <NavbarItem>
                    <NavLink
                        to="/pages"
                        className={({ isActive }) => isActive ? "text-blue-500" : "text-foreground"
                        }
                    >
                        Pages
                    </NavLink>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent className="sm:flex" justify="end">
                <NavbarContent justify="end">
                    <ThemeSwitcher />
                </NavbarContent>
                <NavbarMenuToggle className="xl:hidden" aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
                <NavbarMenu>
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item.name}-${index}`}>
                            <NavLink
                                to={item.to}
                                className={({ isActive }) => isActive ? "text-blue-500" : "text-foreground"
                                }
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </NavLink>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </NavbarContent>
        </Navbar>
    );
} 