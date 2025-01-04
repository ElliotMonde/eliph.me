import { useRef, useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
export default function MenuUnderline({ str }) {
    const [onMenuHover, setOnMenuHover] = useState(false);

    gsap.registerPlugin(useGSAP);
    const container = useRef();
    const { contextSafe } = useGSAP({ scope: container });
    const classArray = [`${str}-menu-item-top`, `${str}-menu-item-mid`, `${str}-menu-item-btm`];
    const onHoverAnimation = contextSafe((classArray) => {
        gsap.set(`.${classArray}`, { transformStyle: 'perserve-3d' });
        gsap.set([`.${classArray[1]}`, `.${classArray[2]}`], { rotateX: -90, y: 15, opacity: 0 });
        gsap.from(`.${classArray[0]}`, { rotationX: 0, y: 0, opacity: 1 });
        gsap.to(`.${classArray[0]}`, { rotationX: 90, y: -15, opacity: 0, duration: 0.35, delay: 0.2 });
        gsap.to(`.${classArray[1]}`, { rotateX: 0, y: 0, opacity: 1, duration: 0.175, delay: 0.30 });
        gsap.to(`.${classArray[1]}`, { rotateX: 90, y: -15, opacity: 1, duration: 0.175, delay: 0.500 });
        gsap.to(`.${classArray[2]}`, { rotateX: 0, y: 0, opacity: 1, duration: 0.35, delay: 0.95 });
    });

    useEffect(() => {
        onMenuHover ? onHoverAnimation(classArray) : null;
    }, [onMenuHover])

    return (
        <span ref={container} className='p-3 flex flex-col' onMouseEnter={() => {
            setOnMenuHover(true);
        }} onMouseLeave={() => setOnMenuHover(false)} >
            <span className={`${classArray[0]} z-[1]`}>{str}</span>
            <span className={`${classArray[1]} z-[1] absolute`}>{str}</span>
            <span className={`${classArray[2]} z-[1] absolute`}>{str}</span>
            <div className={onMenuHover ? `underline-border-hover` : `underline-border`} />
        </span>)
}