import Link from "next/link";
import { buttonStyle, navStyle } from "shared/style/className";

export default function NavProjectListComponent() {
    return (
        <nav className={navStyle}>
            <Link className={buttonStyle} href="/project/create">Create</Link>
        </nav>
    );
}