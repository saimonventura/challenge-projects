import { createContext, FC, ReactNode, useCallback, useContext, useState } from 'react';
import { setApiToken } from 'services/api/setApiToken.service';
import { loginUserService } from 'services/user/loginUser.service';
import { ILoginUser, IUserContext } from 'types/user.type';



const UserContext = createContext<IUserContext>({} as IUserContext);

function UserProvider({ children }: { children: ReactNode }) {
    const [userToken, setUserToken] = useState<string>("");

    const loginUser = useCallback((data: ILoginUser) => {
        loginUserService(data).then(({ token }) => {
            setUserToken(token)
            setApiToken(token)
        })
    }, [])

    return <UserContext.Provider value={{ userToken, loginUser }}>{children}</UserContext.Provider>;
};

function useUser() {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};


export { UserProvider, useUser };