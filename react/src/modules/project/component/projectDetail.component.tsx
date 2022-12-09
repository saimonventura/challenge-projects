import { projectInfoStyle } from "shared/style/className";
import { useProject } from "../context/project.context";

export function ProjectDetailComponent() {
    const { project } = useProject();

    return (
        <div>
            <h3 className={projectInfoStyle}>title: {project?.title}</h3>
            <h3 className={projectInfoStyle}>deadline: {project?.deadline}</h3>
            <h3 className={projectInfoStyle}>done: {String(project?.done)}</h3>
            <h3 className={projectInfoStyle}>city: {project?.zip_code}</h3>
            <h3 className={projectInfoStyle}>cost: {project?.cost}</h3>
        </div>
    );
}