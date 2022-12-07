export enum METHOD {
    GET = 'get',
    POST = 'post',
    PUT = 'put',
    PATCH = 'patch',
    DELETE = 'delete',
}

export interface RouteConfigProps {
    method: METHOD;
    path: string;
}