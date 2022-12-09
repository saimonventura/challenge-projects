import { FormEvent, useCallback } from "react";
import { useProject } from "../context/project.context";
import { ICreateUpdateProject } from "../type/project.type";

export function CreateProjectComponent() {
    const { createProject } = useProject();

    const submitHandler = useCallback((event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data: ICreateUpdateProject = {
            title: formData.get('title') as string,
            deadline: formData.get('deadline') as string,
            zipCode: formData.get('zipCode') as string,
            cost: Number(formData.get('cost'))
        };

        createProject(data);
    }, [])

    return (
        <div>
            <form onSubmit={submitHandler} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <label htmlFor="title">Title</label>
                <input required type="text" name="title" />
                <label htmlFor="deadline">Deadline</label>
                <input required defaultValue={new Date().toISOString()} type="date" name="deadline" />
                <label htmlFor="zip_code">Zip Code</label>
                <input required type="text" name="zipCode" />
                <label htmlFor="cost">Cost</label>
                <input required defaultValue={0} type="number" step="0.01" name="cost" />
                <button type="submit">"Create"</button>
            </form>
        </div>
    );
}