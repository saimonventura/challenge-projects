import { LoginComponent } from 'components/login/login.component';
import { useUser } from 'context/user.context';

export function UserGuard({ children }: { children: JSX.Element }) {
    const { userToken } = useUser();

    if (!userToken) {
        return (
            <LoginComponent />
        );
    }

    return children;
}
