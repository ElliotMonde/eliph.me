import Logo from "../components/Logo";
import "../App.css";
import DarkModeButton from "../components/DarkModeButton";
import { ScrollButton } from "../components/ScrollButton";
export default function LandingPage() {

    return (
        <div className="h-dvh spacing">
            <Logo />
            <ScrollButton />
            <DarkModeButton/>
        </div>
    )
}