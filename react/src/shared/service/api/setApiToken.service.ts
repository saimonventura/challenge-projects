import { api } from './api.service';

export function setApiToken(token: string) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}
