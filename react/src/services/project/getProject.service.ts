import { api } from "services/api/api.service";

export async function getProjectService(project_id: string) {
    const { data } = await api({ url: '/project', params: { id: project_id } });

    return data;
}
