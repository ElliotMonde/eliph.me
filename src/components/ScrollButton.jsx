import { useRef, useEffect } from 'react';
import { DownChevron } from "../assets/svgIcons";
import gsap from 'gsap';
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

export function ScrollButton() {
    gsap.registerPlugin(ScrollToPlugin);
    const scrollButton = useRef();
    let tl = gsap.timeline({repeat: -1, pulse: true});
    const pulse = () => { 
        tl.to(".scroll-button", { opacity: 0.3, duration: 2, delay: 2 })
            .to(".scroll-button", { opacity: 1, duration: 2})
    };
    const scrollBehavior = () => gsap.to(window, {
        scrollTo: (window.pageYOffset + 100),
        duration: 0.4,
        ease: "power1.Out"
    });
    useEffect(() => {
        pulse();
     }, []);
    return (<button ref={scrollButton} onClick={ scrollBehavior} className="fixed scroll-button flex flex-col items-center w-fit justify-self-center bottom-5 left-0 right-0 z-[8]">
        <p>scroll</p>
        <DownChevron />
    </button>)
}