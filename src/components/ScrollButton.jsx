import { useRef, useEffect } from 'react';
import { DownChevron } from "../assets/svgIcons";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
export function ScrollButton() {
    gsap.registerPlugin(useGSAP);
    const scrollButton = useRef();
    let tl = gsap.timeline({repeat: -1, pulse: true});
    const pulse = () => { 
        tl.to(".scroll-button", { opacity: 0.3, duration: 2, delay: 2 })
            .to(".scroll-button", { opacity: 1, duration: 2})
    };
    useEffect(() => {
        pulse();
     }, []);
    return (<button ref={scrollButton} className=" scroll-button flex flex-col items-center absolute bottom-5 left-0 right-0 z-[8]">
        <p>scroll</p>
        <DownChevron />
    </button>)
}