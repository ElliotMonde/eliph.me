import { useRef, useContext, useLayoutEffect } from "react"
import { HoverContext, MobileContext } from "../Providers";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
export function Cursor({ parent_ref }) {
    const cursor = useRef();
    const { isHovering } = useContext(HoverContext);
    const { isMobile, setIsMobile } = useContext(MobileContext);
    gsap.registerPlugin(useGSAP);
    const onCursorMove = (e) => {
        const { width, height } = parent_ref.current.getBoundingClientRect();
        const radius = cursor.current.getBoundingClientRect().width / 2;
        const x = e.x - width / 2 - radius;
        const y = e.y - height / 2 - radius;

        if (e.x < width - radius && e.y < height - radius) {
            gsap.to('.cursor', {
                x: x,
                y: y,
                duration: 0.6,
                ease: "power1",
                overwrite: true
            });
        }
    }
    useLayoutEffect(() => {
        window.addEventListener("mousemove", onCursorMove);
        window.addEventListener("resize", (e) => {
            setIsMobile(e.target.innerWidth < 1024)
        });
    }, []);
    return (<div ref={cursor} className={`cursor ${isHovering ? 'w-[120px] h-[120px]' : ''} ${isMobile ? 'hidden' : ''}`} />)
}