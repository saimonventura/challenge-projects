import { ICreateProject } from "types/project.type";
import { api } from "services/api/api.service";

export async function createProjectService(projectData: ICreateProject) {
    const { data } = await api({
        url: '/project',
        method: 'POST',
        data: projectData
    });

    return data;
}
