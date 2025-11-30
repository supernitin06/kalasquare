// components/Navbar.jsx
"use client";

import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import NavLink from "../ui/Navlink";
import SmartButton from "../ui/Button";
import Image from "next/image";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [navOpen, setNavOpen] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            const current = window.scrollY;

            // 1️⃣ Always show at the top
            if (current === 0) {
                setNavOpen(true);
                setLastScrollY(0);
                return;
            }

            // 2️⃣ Small scroll (0 → 20px) → hide
            if (current > 10 && current <= 400) {
                setNavOpen(false);
            }

            // 3️⃣ After 300px scroll → SHOW again
            if (current > 400) {
                setNavOpen(true);
            }

            // 4️⃣ If scrolling UP at any point → SHOW
            if (current < lastScrollY) {
                setNavOpen(true);
            }

            setLastScrollY(current);

            // Active section detection
            const sections = ['home', 'benefits', 'mentorship', 'songs', 'testimonials'];
            const scrollPosition = window.scrollY + 200; // Offset for navbar height

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;
                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        setActiveSection(sections[i]);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial call
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);


    const toggleMenu = () => setOpen(!open);

    return (
        <nav className={`w-full shadow-md bg-white fixed   top-0 left-0 duration-400 transition-all  z-50 ${navOpen ? "scale-y-100 origin-top  opacity-100 " : " scale-y-0 origin-top   opacity-0  "}   `}>
            <div className="w-full container px-[3vw] mx-auto   flex justify-between items-center h-[86px]">
                {/* Logo */}
                <div className="shrink-0">
                    <NavLink href="/">
                        <div className="relative  text-2xl w-42 h-12 font-bold text-red-500">
                            <Image
                                src={'/images/logo1.png'}
                                alt="kalasquare"
                                fill
                                className=" "
                            />


                        </div>


                    </NavLink>
                </div>

                <div className="md:flex hidden h-full flex-wrap justify-center items-center space-x-[1.5vw] ">
                    {/* Menu */}
                    <div className="hidden md:flex w-[519px]  justify-around  text-[clamp(10px,2vw,16px)] font-medium items-center">
                        <a
                            href="#home"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className={`transition-colors cursor-pointer pb-1 ${activeSection === 'home'
                                    ? 'text-red-500 border-b-2 border-red-500'
                                    : 'hover:text-red-500'
                                }`}
                        >
                            Home
                        </a>

                        <a
                            href="#benefits"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className={`transition-colors cursor-pointer pb-1 ${activeSection === 'benefits'
                                    ? 'text-red-500 border-b-2 border-red-500'
                                    : 'hover:text-red-500'
                                }`}
                        >
                            Benefits
                        </a>

                        <a
                            href="#songs"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('songs')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className={`transition-colors cursor-pointer pb-1 ${activeSection === 'songs'
                                    ? 'text-red-500 border-b-2 border-red-500'
                                    : 'hover:text-red-500'
                                }`}
                        >
                            Songs
                        </a>

                        <a
                            href="#mentorship"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('mentorship')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className={`transition-colors cursor-pointer pb-1 ${activeSection === 'mentorship'
                                    ? 'text-red-500 border-b-2 border-red-500'
                                    : 'hover:text-red-500'
                                }`}
                        >
                            Mentorship
                        </a>



                        <a
                            href="#testimonials"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className={`transition-colors cursor-pointer pb-1 ${activeSection === 'testimonials'
                                    ? 'text-red-500 border-b-2 border-red-500'
                                    : 'hover:text-red-500'
                                }`}
                        >
                            Testimonials
                        </a>
                    </div>


                    {/* Sign In Button */}
                    <div className="hidden md:flex">
                        <NavLink href="/signin">
                            <SmartButton text="Sign In" />
                        </NavLink>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu}>
                        {open ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-white px-4 pb-4 space-y-2">
                    <a
                        href="#home"
                        onClick={(e) => {
                            e.preventDefault();
                            setOpen(false);
                            document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className={`block transition-colors cursor-pointer ${activeSection === 'home'
                                ? 'text-red-500 font-semibold'
                                : 'hover:text-red-500'
                            }`}
                    >
                        Home
                    </a>
                    <a
                        href="#benefits"
                        onClick={(e) => {
                            e.preventDefault();
                            setOpen(false);
                            document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className={`block transition-colors cursor-pointer ${activeSection === 'benefits'
                                ? 'text-red-500 font-semibold'
                                : 'hover:text-red-500'
                            }`}
                    >
                        Benefits
                    </a>
                    <a
                        href="#mentorship"
                        onClick={(e) => {
                            e.preventDefault();
                            setOpen(false);
                            document.getElementById('mentorship')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className={`block transition-colors cursor-pointer ${activeSection === 'mentorship'
                                ? 'text-red-500 font-semibold'
                                : 'hover:text-red-500'
                            }`}
                    >
                        Mentorship
                    </a>
                    <a
                        href="#songs"
                        onClick={(e) => {
                            e.preventDefault();
                            setOpen(false);
                            document.getElementById('songs')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className={`block transition-colors cursor-pointer ${activeSection === 'songs'
                                ? 'text-red-500 font-semibold'
                                : 'hover:text-red-500'
                            }`}
                    >
                        Songs
                    </a>
                    <a
                        href="#testimonials"
                        onClick={(e) => {
                            e.preventDefault();
                            setOpen(false);
                            document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className={`block transition-colors cursor-pointer ${activeSection === 'testimonials'
                                ? 'text-red-500 font-semibold'
                                : 'hover:text-red-500'
                            }`}
                    >
                        Testimonials
                    </a>
                    <NavLink href="/signin" className="block">
                        <button className="w-full bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-colors flex justify-center items-center space-x-2">
                            <span>Sign In</span>
                            <span>→</span>
                        </button>
                    </NavLink>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
