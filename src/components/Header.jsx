import {MenuUnderline} from "./MenuUnderline";
import { useState, useEffect, useContext, useRef } from "react";
import { DarkModeContext } from "../Providers";
import { BurgerIcon } from "../assets/svgIcons";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import gsap from 'gsap';

export default function Header({ navDict }) {
    const { isDarkMode } = useContext(DarkModeContext);
    const [isNavClosed, setIsNavClosed] = useState(true);

    gsap.registerPlugin(ScrollToPlugin);

    const navTitles = {
        "home": useRef(),
        "projects": useRef(),
        "contact": useRef(),
    };
    useEffect(() => {
        window.addEventListener("resize", () => { if (window.innerWidth >= 1024) setIsNavClosed(true) });
    }, [])


    const onNavClick = (sectionRef) => {
        setIsNavClosed(true);
        gsap.to(window, {
            scrollTo: sectionRef.current.offsetTop,
            duration: 1
        })
    };

    return (
        <div className='header-container fixed right-0 z-50'>
            { /* Desktop Nav */}
            <nav className="justify-end lg:flex flex-row gap-11 hidden lg:visible spacing">
                {Object.entries(navTitles).map(([str, ref]) =>
                    <MenuUnderline
                        ref={ref}
                        str={str}
                        key={str}
                        onNavClick={() => onNavClick(navDict[str])}
                    />
                )}
            </nav>
            { /* Mobile Nav */}
            <nav className="visible lg:hidden w-full flex flex-col min-h-screen">
                <button className="absolute z-10 right-10 top-5" onClick={() => { setIsNavClosed(!isNavClosed) }}><BurgerIcon /></button>
                <div className={`${isNavClosed ? `hidden` : ``} flex-1 flex flex-col w-dvw z-[9] ${isDarkMode ? 'dark bg-transition' : 'bg-bgColor transition-colors ease-in-out duration-50'}`}>
                    <div className="h-20" />
                    {Object.entries(navTitles).map(([str, ref]) =>
                        <MenuUnderline
                            ref={ref}
                            str={str}
                            key={str}
                            onNavClick={() => onNavClick(navDict[str])}
                        />)}
                </div>
            </nav>
        </div>
    )
}