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
        <div className="absolute h-fit">
            <div className="h-dvh"></div>
            <div className={`w-dvw h-dvh ${isDarkMode ? '' : 'opacity-85'}`}>
                <ShaderBg />
            </div>
            {/* overlaying components */}
                <Logo />
                <ScrollButton />
                <DarkModeButton />
        </div>
    )
}