import { api } from "services/api/api.service";

export async function setProjectDoneService(projectId: string) {
    const { data } = await api({
        url: `/projects/${projectId}/done`,
        method: 'PATCH',
    });

    return data;
}
