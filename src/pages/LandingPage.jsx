import Logo from "../components/Logo";
import "../App.css";
import DarkModeButton from "../components/DarkModeButton";
import { ScrollButton } from "../components/ScrollButton";
import ShaderBg from "../components/ShaderBg";
import { useContext } from "react";
import { DarkModeContext } from "../Providers";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function LandingPage() {
    const { isDarkMode } = useContext(DarkModeContext);
    gsap.registerPlugin(ScrollTrigger);
    // const panels = gsap.utils.toArray(panel);
    gsap.to(".panel", {
        scrollTrigger: {
            trigger: ".panel",
            pin: true,
            start: "top top",
            end: "bottom bottom",
            scrub: 2,
            snap: {
                snapTo: 1 / 4,
                duration: 1,
                ease: "power1.inOut"
            },
        }
    });
 
    
    return (
        <div className="scroll_container flex flex-col min-h-fit">
            <section className="panel h-dvh"> 1 panel</section>
            <section className="panel h-dvh mt-0 pt-0"> 2 panel
            {/* <span className="fixed top-[60vh] left-20">My name is Elliot. I'm a Computer Science undergraduate and aspiring Software Engineer.</span> */}
            </section>
            <section className={`panel w-dvw h-dvh ${isDarkMode ? '' : 'opacity-85'} mt-0 pt-0`}>
                <ShaderBg />
            </section>
            <section className="panel h-dvh mt-0 pt-0"> 4 panel</section>
            <section className="panel h-dvh mt-0 pt-0"> 5 panel</section>
            {/* overlaying components */}
            <Logo />
            <ScrollButton />
            <DarkModeButton />
        </div>
    )
}