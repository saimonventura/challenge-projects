import { createContext, ReactNode, useCallback, useContext, useState } from 'react';
import { createProjectService } from 'services/project/createProject.service';
import { deleteProjectService } from 'services/project/deleteProject.service';
import { editProjectService } from 'services/project/editProject.service';
import { getProjectService } from 'services/project/getProject.service';
import { getProjectsService } from 'services/project/getProjects.service';
import { setProjectDoneService } from 'services/project/setProjectDone.service';
import { ICreateProject, IProject, IProjectContext } from 'types/project.type';

const ProjectContext = createContext<IProjectContext>({} as IProjectContext);

function ProjectProvider({ children }: { children: ReactNode }) {
    const [projects, setProjects] = useState<IProject[]>([]);
    const [project, setProject] = useState<IProject>();

    const fetchProjects = useCallback(() => {
        getProjectsService().then(setProjects)
    }, [])

    const fetchProject = useCallback((projectId: string) => {
        getProjectService(projectId).then(setProject)
    }, [])

    const createProject = useCallback((projectData: ICreateProject) => {
        createProjectService(projectData).then(fetchProjects)
    }, [fetchProjects])

    const editProject = useCallback((projectId: string, projectData: ICreateProject) => {
        editProjectService(projectId, projectData).then(fetchProjects)
    }, [fetchProjects])

    const setProjectDone = useCallback((projectId: string) => {
        setProjectDoneService(projectId).then(fetchProjects)
    }, [fetchProjects])

    const deleteProject = useCallback((projectId: string) => {
        deleteProjectService(projectId).then(fetchProjects)
    }, [fetchProjects])

    return <ProjectContext.Provider value={{
        projects,
        project,
        editProject,
        fetchProjects,
        fetchProject,
        createProject,
        setProjectDone,
        deleteProject
    }}>{children}</ProjectContext.Provider>;
};

function useProject() {
    const context = useContext(ProjectContext);
    if (context === undefined) {
        throw new Error('useProject must be used within a ProjectProvider');
    }
    return context;
};


export { ProjectProvider, useProject };