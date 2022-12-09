import { api } from "shared/service/api/api.service";
import { ICreateUpdateProject } from "../type/project.type";
import { createProjectAdapter } from "./adapters/createProject.adapter";

export async function createProjectService(projectData: ICreateUpdateProject) {
    const { data } = await api({
        url: '/project',
        method: 'POST',
        data: createProjectAdapter(projectData)
    });

    return data;
}
