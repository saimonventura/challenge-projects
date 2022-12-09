import { api } from "services/api/api.service";

export async function getProjectsService() {
    const { data } = await api({ url: '/projects' });

    return data;
}
