import { createContext, useState } from "react";

export const HoverContext = createContext();
export const HoverProvider = ({ children }) => { 
    const [isHovering, setIsHovering] = useState(false);
    return (
        <HoverContext.Provider value={{isHovering, setIsHovering}}>
            { children }
        </HoverContext.Provider>
    );
}