import { ICreateProject } from "types/project.type";
import { api } from "services/api/api.service";
import { createProjectAdapter } from "./adapters/createProject.adapter";

export async function createProjectService(projectData: ICreateProject) {
    const { data } = await api({
        url: '/project',
        method: 'POST',
        data: createProjectAdapter(projectData)
    });

    return data;
}
