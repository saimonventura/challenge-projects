import Link from "next/link";
import { buttonStyle, navStyle } from "shared/style/className";


export default function NavCreateProjectComponent() {
    return (
        <nav className={navStyle}>
            <Link className={buttonStyle} href="/">Home</Link>
        </nav>
    );
}