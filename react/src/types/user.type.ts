export type IUserContext = {
    userToken: string;
    loginUser: (data: ILoginUser) => void;
};

export interface IUser {
    id: string;
    name: string;
    username: string;
    created_at: boolean;
}

export type ILoginUser = {
    name?: string;
    username: string;
    password: string;
}