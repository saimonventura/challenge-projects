import { ILoginUser } from "types/user.type";
import { api } from "services/api/api.service";

export async function loginUserService(loginUser: ILoginUser) {
    const { data } = await api({
        url: '/users',
        method: 'POST',
        data: loginUser
    });

    return data;
}
