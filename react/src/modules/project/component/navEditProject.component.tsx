import Link from "next/link";
import { buttonStyle, navStyle } from "shared/style/className";


export default function NavEditProjectComponent() {
    return (
        <nav className={navStyle}>
            <Link className={buttonStyle} href="/">Home</Link>
            <Link className={buttonStyle} href="/project/create">Create</Link>
        </nav>
    );
}