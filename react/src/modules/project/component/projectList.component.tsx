import Link from "next/link";
import { projectItemStyle, subTitleStyle, subWrappeStyle } from "shared/style/className";
import { useProject } from "../context/project.context";

export function ProjectList() {
    const { projects } = useProject();
    return (
        <div className={subWrappeStyle}>
            <h2 className={subTitleStyle}>Project List</h2>

            <ul >
                {projects.map((project) => (
                    <Link key={project.project_id} href={`/project/${project.project_id}`}>
                        <li className={projectItemStyle} >{project.title}</li>
                    </Link>
                ))}
            </ul>

        </div>
    );
}