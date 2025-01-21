import Logo from "../components/Logo";
import "../App.css";
import DarkModeButton from "../components/DarkModeButton";
import { ScrollButton } from "../components/ScrollButton";
import ShaderBg from "../components/ShaderBg";
import { useContext } from "react";
import { DarkModeContext } from "../Providers";
export default function LandingPage() {
    const { isDarkMode } = useContext(DarkModeContext);
    return (
        <div className="overflow-y-scroll h-[300vh]">
            <div className={`absolute w-dvw h-dvh ${isDarkMode ? '' : 'opacity-85'}`}>
                <ShaderBg />
            </div>
            <div className="h-dvh spacing overflow-hidden">
                <Logo />
                <ScrollButton />
                <DarkModeButton />
            </div>
        </div>
    )
}