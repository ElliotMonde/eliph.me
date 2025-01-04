import MenuUnderline from "./MenuUnderline";
import { BurgerIcon } from "../assets/svgIcons";

export default function Header() {
    const navTitles = ["projects", "misc", "contact"];
    return (
        <>
            <nav className="justify-end xl:flex flex-row gap-11 hidden xl:visible">
                {navTitles.map(str =>
                    <MenuUnderline str={str} key={str} />
                )}
            </nav>
            <nav className="visible xl:hidden ">
                <BurgerIcon />
            </nav>
        </>
    )
}