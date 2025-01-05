import { useContext, useRef, useEffect } from 'react';
import { HoverContext } from '../HoverProvider';
import Subheader from './Subheader';
export default function Logo() {
    const logoRef = useRef();
    const { setIsHovering } = useContext(HoverContext);
    useEffect(() => {
        logoRef.current.addEventListener('mouseenter', () => { setIsHovering(true) });
        logoRef.current.addEventListener('mouseleave', () => { setIsHovering(false) });
    }, [])
    
    return (
        <div className='flex flex-col w-auto mt-[25vh]'>
            <div ref={logoRef} className='averia-serif-libre-bold lg:text-[10rem] text-[5rem] flex flex-col w-fit'>
                eliph.
            </div>
            <Subheader />
        </div>)
}