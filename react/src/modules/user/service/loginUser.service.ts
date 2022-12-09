import { api } from "shared/service/api/api.service";
import { ILoginUser } from "../type/user.type";

export async function loginUserService(loginUser: ILoginUser) {
    const { data } = await api({
        url: '/users',
        method: 'POST',
        data: loginUser
    });

    return data;
}
