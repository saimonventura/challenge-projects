import { api } from "shared/service/api/api.service";

export async function deleteProjectService(projectId: string) {
    const { data } = await api({
        url: `/projects/${projectId}`,
        method: 'DELETE',
    });

    return data;
}
