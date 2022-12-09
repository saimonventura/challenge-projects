import { LoginComponent } from "modules/user/component/login/login.component";
import { useUser } from "modules/user/context/user.context";

export function UserGuard({ children }: { children: JSX.Element }) {
    const { userToken } = useUser();
    if (!userToken) {
        return (
            <LoginComponent />
        );
    }

    return children;
}
