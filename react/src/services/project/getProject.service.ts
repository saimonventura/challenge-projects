import { api } from "services/api/api.service";

export async function getProjectService(projectId: string) {
    const { data } = await api({ url: '/project', params: { id: projectId } });

    return data;
}
