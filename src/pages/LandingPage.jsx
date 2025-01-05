import Logo from "../components/Logo/Logo";
import "../App.css";
import DarkModeButton from "../components/DarkModeButton";
export default function LandingPage() {

    return (
        <div className="h-dvh spacing">
            <Logo />
            <DarkModeButton/>
        </div>
    )
}