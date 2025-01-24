/* eslint-disable react/prop-types */
import React, { useState, useEffect, useContext, useRef } from 'react';
import { HoverContext } from '../Providers';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
export const MenuUnderline = React.forwardRef(({ str, onNavClick }, ref) => {
    const { setIsHovering } = useContext(HoverContext);
    const [onMenuHover, setOnMenuHover] = useState(false);
    const container = useRef();
    gsap.registerPlugin(useGSAP);
    const { contextSafe } = useGSAP({ scope: container });
    const classArray = [`${str}-menu-item-top`, `${str}-menu-item-mid`, `${str}-menu-item-btm`];

    const yOffset = -15;
    const duration = 1;
    const onHoverAnimation = contextSafe((classArray) => {
        gsap.set(`.${classArray}`, { transformStyle: 'perserve-3d' });
        gsap.set([`.${classArray[1]}`, `.${classArray[2]}`], { rotateX: -90, y: -yOffset, opacity: 0 });
        gsap.from(`.${classArray[0]}`, { rotationX: 0, y: 0, opacity: 1 });
        gsap.to(`.${classArray[0]}`, { rotationX: 90, y: yOffset, opacity: 0, duration: duration, delay: 0.2 });
        gsap.to(`.${classArray[1]}`, { rotateX: 0, y: 0, opacity: 1, duration: duration / 2, delay: 0.4 });
        gsap.to(`.${classArray[1]}`, { rotateX: 90, y: yOffset, opacity: 1, duration: duration / 2, delay: 0.8 });
        gsap.to(`.${classArray[2]}`, { rotateX: 0, y: 0, opacity: 1, duration: duration, delay: 0.8 });
    });

    useEffect(() => {
        if (onMenuHover) {
            onHoverAnimation(classArray);
        };
        setIsHovering(onMenuHover);

    }, [onMenuHover])

    return (
        <button onClick={onNavClick}>
            <span ref={ container }  forwardref={ref} className={`p-6 flex flex-col w-fit ${str}`} onMouseEnter={() => {
                setOnMenuHover(true);
            }} onMouseLeave={() => setOnMenuHover(false)} >
                <span className={`${classArray[0]}`}>{str}</span>
                <span className={`${classArray[1]} absolute`}>{str}</span>
                <span className={`${classArray[2]} absolute`}>{str}</span>
                <div className={onMenuHover ? `underline-border-hover` : `underline-border`} />
            </span>
        </button>)
})