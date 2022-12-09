import { api } from "shared/service/api/api.service";

export async function getProjectService(projectId: string) {
    const { data } = await api({ url: '/project', params: { id: projectId } });

    return data;
}
