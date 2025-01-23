import { useContext, useRef, useEffect } from 'react';
import { DarkModeContext, HoverContext } from '../Providers';
import Subheader from './Subheader';
export default function Logo() {
    const logoRef = useRef();
    const { isDarkMode } = useContext(DarkModeContext);
    const { setIsHovering } = useContext(HoverContext);
    useEffect(() => {
        logoRef.current.addEventListener('mouseenter', () => { setIsHovering(true) });
        logoRef.current.addEventListener('mouseleave', () => { setIsHovering(false) });
    }, [])

    return (
        <div className={`fixed flex flex-col w-auto left-20 top-[25vh] ${isDarkMode ? 'mix-blend-difference' : ''} z-4`}>
            <div ref={logoRef} className='averia-serif-libre-bold lg:text-[10rem] text-[5rem] flex flex-col w-fit'>
                eliph.
            </div>
            <Subheader />
        </div>)
}