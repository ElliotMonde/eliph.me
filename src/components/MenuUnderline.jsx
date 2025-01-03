import { useState } from 'react'
export default function MenuUnderline({ str }) {
    const [onMenuHover, setOnMenuHover] = useState(false);
    return (
        <span className='p-3' onMouseEnter={() => { setOnMenuHover(true) }} onMouseLeave={() => { setOnMenuHover(false) }}>
            {str}
            <div className={onMenuHover ? `underline-border-hover` : `underline-border`} />
        </span>)
}