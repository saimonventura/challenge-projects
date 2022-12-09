import { ICreateUpdateProject } from "modules/project/type/project.type";

export const createProjectAdapter = ({ title, zipCode, deadline, cost }: ICreateUpdateProject) => {

    const formattedDeadline = new Date(deadline).toISOString();

    return {
        title,
        zip_code: zipCode,
        deadline: formattedDeadline,
        cost
    };
}