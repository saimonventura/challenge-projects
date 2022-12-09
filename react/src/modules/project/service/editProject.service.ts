import { api } from "shared/service/api/api.service";
import { ICreateUpdateProject } from "../type/project.type";

export async function editProjectService(projectId: string, editedProjectData: ICreateUpdateProject) {
    const { data } = await api({
        url: `/projects/${projectId}`,
        method: 'PUT',
        data: editedProjectData
    });

    return data;
}
