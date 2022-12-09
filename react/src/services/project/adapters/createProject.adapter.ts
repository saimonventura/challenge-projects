import { ICreateProject } from "types/project.type";

export const createProjectAdapter = ({ title, zipCode, deadline, cost }: ICreateProject) => {

    const formattedDeadline = new Date(deadline).toISOString();

    return {
        title,
        zip_code: zipCode,
        deadline: formattedDeadline,
        cost
    };
}