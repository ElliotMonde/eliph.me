import { createContext, useLayoutEffect, useState } from "react";


/* For cursor to check if it is hovering over a clickable component */
export const HoverContext = createContext();
export const HoverProvider = ({ children }) => {
    const [isHovering, setIsHovering] = useState(false);
    return (
        <HoverContext.Provider value={{ isHovering, setIsHovering }}>
            {children}
        </HoverContext.Provider>
    );
}

/* For toggling dark theme throughout app */
export const DarkModeContext = createContext();
export const DarkModeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches); // default is system preference
    return (
        <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
}

/* For toggling mobile/desktop view */
export const MobileContext = createContext();
export const MobileProvider = ({ children }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
    return (
        <MobileContext.Provider value={{isMobile, setIsMobile}}>
            {children}
        </MobileContext.Provider>
    )
}

export const ScrollContext = createContext();
export const ScrollProvider = ({ children }) => { 
    const [scrollHeight, setScrollHeight] = useState(window.scrollHeight - window.innerHeight);
    useLayoutEffect(() => { 
        window.addEventListener("scroll", () => {
            setScrollHeight(window.scrollHeight - window.innerHeight);
            console.log(window.scrollHeight - window.innerHeight);
        });
    })
    return (
        <ScrollContext.Provider value={{scrollHeight}}>
            { children }
        </ScrollContext.Provider>
    )
}