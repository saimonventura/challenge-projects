import { api } from "shared/service/api/api.service";

export async function setProjectDoneService(projectId: string) {
    const { data } = await api({
        url: `/projects/${projectId}/done`,
        method: 'PATCH',
    });

    return data;
}
