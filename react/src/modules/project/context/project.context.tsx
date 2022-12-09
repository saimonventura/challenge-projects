import { createContext, ReactNode, useCallback, useContext, useState } from 'react';
import { createProjectService } from '../service/createProject.service';
import { deleteProjectService } from '../service/deleteProject.service';
import { editProjectService } from '../service/editProject.service';
import { getProjectService } from '../service/getProject.service';
import { getProjectsService } from '../service/getProjects.service';
import { setProjectDoneService } from '../service/setProjectDone.service';
import { ICreateUpdateProject, IProject, IProjectContext } from '../type/project.type';

const ProjectContext = createContext<IProjectContext>({} as IProjectContext);

function ProjectProvider({ children }: { children: ReactNode }) {
    const [projects, setProjects] = useState<IProject[]>([]);
    const [project, setProject] = useState<IProject>();

    const fetchProjects = useCallback(() => {
        getProjectsService().then(setProjects)
    }, [])

    const fetchProject = useCallback((projectId: string) => {
        setProject(undefined);
        getProjectService(projectId).then(setProject)
    }, [])

    const createProject = useCallback((projectData: ICreateUpdateProject) => {
        createProjectService(projectData).then(fetchProjects)
    }, [fetchProjects])

    const editProject = useCallback((projectId: string, projectData: ICreateUpdateProject) => {
        editProjectService(projectId, projectData).then(fetchProjects)
    }, [fetchProjects])

    const setProjectDone = useCallback(async (projectId: string) => {
        await setProjectDoneService(projectId).then(fetchProjects)
    }, [fetchProjects])

    const deleteProject = useCallback(async (projectId: string) => {
        confirm('Are you sure you want to delete this project?') &&
            await deleteProjectService(projectId).then(fetchProjects)
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