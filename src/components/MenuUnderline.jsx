import { useState } from 'react'
export default function MenuUnderline(props) {
    const [onMenuHover, setOnMenuHover] = useState(false);
    return (
        <span className='p-3' onMouseEnter={() => { setOnMenuHover(true) }} onMouseLeave={() => { setOnMenuHover(false) }}>
            {props.str}
            <div className={onMenuHover ? `underline-border-hover` : `underline-border`} />
        </span>)
}