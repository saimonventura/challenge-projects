import { useProject } from "context/project.context";
import { FormEvent, useCallback } from "react";
import { ICreateProject, IProject } from "types/project.type";

export function EditProjectComponent({ project }: { project: IProject }) {
    const { editProject } = useProject();

    const submitHandler = useCallback((event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data: ICreateProject = {
            title: formData.get('title') as string,
            deadline: new Date(formData.get('deadline') as string).toISOString(),
            zipCode: formData.get('zipCode') as string,
            cost: Number(formData.get('cost'))
        };

        editProject(project.project_id, data);
    }, [])

    return (
        <div>
            <form onSubmit={submitHandler} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <label htmlFor="title">Title</label>
                <input required defaultValue={project?.title} type="text" name="title" />
                <label htmlFor="deadline">Deadline</label>
                <input required defaultValue={project.deadline} type="date" name="deadline" />
                <label htmlFor="zip_code">Zip Code</label>
                <input required defaultValue={project?.zip_code} type="text" name="zipCode" />
                <label htmlFor="cost">Cost</label>
                <input required defaultValue={project?.cost} type="number" step="0.01" name="cost" />
                <button type="submit">Edit</button>
            </form>
        </div>
    );
}