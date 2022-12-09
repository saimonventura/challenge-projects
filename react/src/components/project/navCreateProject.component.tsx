import Link from "next/link";

export default function NavCreateProjectComponent() {
    return (
        <nav style={{ display: 'flex', gap: "10px" }}>
            <Link href="/">Home</Link>
        </nav>
    );
}