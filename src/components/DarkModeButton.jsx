import { useContext } from 'react';
import { DarkModeContext } from '../DarkModeProvider';
import { MoonIcon } from "../assets/svgIcons";

export default function DarkModeButton() {
    const { setIsDarkMode, isDarkMode } = useContext(DarkModeContext);
    return (
        <button onClick={()=> setIsDarkMode(!isDarkMode)} className="absolute z-99 bottom-10 right-10">
            <MoonIcon/>
        </button>
    )
}