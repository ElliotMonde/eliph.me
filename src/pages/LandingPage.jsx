import Logo from "../components/Logo";
import "../App.css";
import DarkModeButton from "../components/DarkModeButton";
import { ScrollButton } from "../components/ScrollButton";
import ShaderBg from "../components/ShaderBg";
import { useContext, useEffect, useRef } from "react";
import { DarkModeContext } from "../Providers";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Header from "../components/Header";

export default function LandingPage() {
    const { isDarkMode } = useContext(DarkModeContext);
    const navDict = {
        "home": useRef(),
        "projects": useRef(),
        "contact": useRef(),
    }
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        const panels = gsap.utils.toArray(".panel");
        panels.map((panel) => {
            gsap.to(window, {
                scrollTrigger: {
                    trigger: panel._gsap,
                    pin: true,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: true,
                    snap: {
                        snapTo: 1 / 4,
                        duration: 0.5,
                        ease: "power1.inOut"
                    },
                }
            });
        })
    }, []);

    return (
        <div className="flex flex-col min-h-fit">
            <section ref={navDict["home"]} className="first panel h-dvh"> 1 panel</section>
            <section className={`second panel w-dvw h-dvh ${isDarkMode ? '' : 'opacity-85'} mt-0 pt-0`}>
                <ShaderBg />
            </section>
            <section className="third panel h-dvh mt-0 pt-0"> 3 panel
            </section>
            <section ref={navDict["projects"]} className="fourth panel h-dvh mt-0 pt-0"> Projects</section>
            <section ref={navDict["contact"]} className="fifth panel h-dvh mt-0 pt-0"> Contact</section>
            {/* overlaying components */}
            <Header navDict={navDict} />
            <Logo />
            <ScrollButton />
            <DarkModeButton />
        </div>
    )
}