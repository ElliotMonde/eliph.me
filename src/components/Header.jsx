import MenuUnderline from "./MenuUnderline";

export default function Header() {

    return (
        <nav className="justify-end flex flex-row gap-11">
            <MenuUnderline str={"projects"} />
            <MenuUnderline str={"misc"}/>
            <MenuUnderline str={"contact"} />
        </nav>
    )
}