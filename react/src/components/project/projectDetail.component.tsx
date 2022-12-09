import { IProject } from "types/project.type";

export function ProjectDetailComponent({ project }: { project: IProject }) {
    return (
        <div>
            <h3>title: {project.title}</h3>
            <h3>deadline: {project.deadline}</h3>
            <h3>done: {String(project.done)}</h3>
            <h3>city: {project.zip_code}</h3>
            <h3>cost: {project.cost}</h3>
        </div>
    );
}