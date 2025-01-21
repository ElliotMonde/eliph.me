import MenuUnderline from "./MenuUnderline";
import { useState, useEffect, useContext } from "react";
import { DarkModeContext } from "../Providers";
import { BurgerIcon } from "../assets/svgIcons";
export default function Header() {
    const { isDarkMode } = useContext(DarkModeContext);
    const [isNavClosed, setIsNavClosed] = useState(true);
    const navTitles = ["projects", "misc", "contact"];
    useEffect(() => {
        window.addEventListener("resize", () => { if (window.innerWidth >= 1024) setIsNavClosed(true) });
    }, [])

    return (
        <div className='absolute right-0 z-[999]'>
            <nav className="justify-end lg:flex flex-row gap-11 hidden lg:visible spacing">
                {navTitles.map(str =>
                    <MenuUnderline str={str} key={str} />
                )}
            </nav>
            <nav className="visible lg:hidden w-full flex flex-col min-h-screen">
                <button className="absolute z-10 right-10 top-5" onClick={() => { setIsNavClosed(!isNavClosed) }}><BurgerIcon /></button>
                <div className={`${isNavClosed ? `hidden` : ``} flex-1 flex flex-col w-dvw z-[9] ${isDarkMode ? 'dark bg-transition' : 'bg-bgColor transition-colors ease-in-out duration-50'}`}>
                    <div className="h-20"/>
                    {navTitles.map(str => <MenuUnderline str={str} key={str} />)}
                </div>
            </nav>
        </div>
    )
}