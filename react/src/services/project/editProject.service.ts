import { ICreateProject } from "types/project.type";
import { api } from "services/api/api.service";

export async function editProjectService(projectId: string, editedProjectData: ICreateProject) {
    const { data } = await api({
        url: `/projects/${projectId}`,
        method: 'PUT',
        data: editedProjectData
    });

    return data;
}
