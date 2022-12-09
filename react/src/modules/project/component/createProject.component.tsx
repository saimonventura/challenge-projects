import { FormEvent, useCallback } from "react";
import { buttonStyle, formStyle, inputStyle } from "shared/style/className";
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
        <form className={formStyle} onSubmit={submitHandler} >
            <label htmlFor="title">*Title</label>
            <input placeholder="Title" className={inputStyle} required type="text" name="title" />
            <label htmlFor="deadline">*Deadline</label>
            <input placeholder="Deadline" className={inputStyle} required type="date" name="deadline" />
            <label htmlFor="zip_code">*Zip Code</label>
            <input placeholder="Zip Code" className={inputStyle} required type="text" name="zipCode" />
            <label htmlFor="cost">*Cost</label>
            <input placeholder="Cost" className={inputStyle} required type="number" step="0.01" name="cost" />
            <button type="submit" className={buttonStyle}>Create</button>
        </form>
    );
}