import { FC, ReactNode } from "react";
import { ProjectProvider } from "./project.context";
import { UserProvider } from "./user.context";

export function Provider({ children }: { children: ReactNode }) {
    return <UserProvider>
        <ProjectProvider>
            {children}
        </ProjectProvider>
    </UserProvider>
}