import { useContext } from 'react';
import { DarkModeContext } from '../DarkModeProvider';
import { MoonIcon, SunIcon } from "../assets/svgIcons";

export default function DarkModeButton() {
    const { setIsDarkMode, isDarkMode } = useContext(DarkModeContext);
    return (
        <button onClick={() => setIsDarkMode(!isDarkMode)} className="absolute bottom-10 right-10">
            {isDarkMode ? <SunIcon /> : <MoonIcon />}
        </button>
    )
}