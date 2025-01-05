import MenuUnderline from "./MenuUnderline";
import { BurgerIcon } from "../assets/svgIcons";
import { useState, useEffect } from "react";

export default function Header() {
    const [isNavClosed, setIsNavClosed] = useState(true);
    const navTitles = ["projects", "misc", "contact"];
    useEffect(() => {
        window.addEventListener("resize", () => { if (window.innerWidth >= 1024) setIsNavClosed(true) });
    }, [])

    return (
        <div className='absolute w-full m-0 p-0 spacing'>
            <nav className="justify-end lg:flex flex-row gap-11 hidden lg:visible">
                {navTitles.map(str =>
                    <MenuUnderline str={str} key={str} />
                )}
            </nav>
            <nav className="visible lg:hidden w-full flex flex-col">
                <button onClick={() => { setIsNavClosed(!isNavClosed) }}><BurgerIcon /></button>
                <div className={`${isNavClosed ? `hidden` : ``} flex flex-col h-[90vh] bg-white`}>
                    {navTitles.map(str => <MenuUnderline str={str} key={str} />)}
                </div>
            </nav>
        </div>
    )
}