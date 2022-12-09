import Link from "next/link";

export default function NavEditProjectComponent() {
    return (
        <nav style={{ display: 'flex', gap: "10px" }}>
            <Link href="/">Home</Link>
            <Link href="/project/create">Create</Link>
        </nav>
    );
}