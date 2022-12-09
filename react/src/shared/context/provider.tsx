import { ProjectProvider } from "modules/project/context/project.context";
import { UserProvider } from "modules/user/context/user.context";
import { ReactNode } from "react";

export function Provider({ children }: { children: ReactNode }) {
    return <UserProvider>
        <ProjectProvider>
            {children}
        </ProjectProvider>
    </UserProvider>
}