import Link from "next/link";
import { useProject } from "../context/project.context";

export function ProjectList() {
    const { projects } = useProject();
    return (
        <div>
            <h2>Project List</h2>

            <ul>
                {projects.map((project) => (
                    <Link key={project.project_id} href={`/project/${project.project_id}`}>
                        <li >{project.title}</li>
                    </Link>
                ))}
            </ul>

        </div>
    );
}