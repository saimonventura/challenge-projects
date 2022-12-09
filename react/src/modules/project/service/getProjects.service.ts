import { api } from "shared/service/api/api.service";

export async function getProjectsService() {
    const { data } = await api({ url: '/projects' });

    return data;
}
