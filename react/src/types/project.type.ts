export type IProjectContext = {
    projects: IProject[];
    project: IProject | undefined;
    fetchProjects: () => void;
    fetchProject: (projectId: string) => void;
    createProject: (projectData: ICreateProject) => void;
    editProject: (projectId: string, editedProjectData: ICreateProject) => void;
    setProjectDone: (projectId: string) => Promise<void>;
    deleteProject: (projectId: string) => Promise<void>;
};

export type IProject = {
    project_id: string;
    title: string;
    deadline: string;
    zip_code: string;
    cost: number;
    done: boolean;
    created_at?: string;
    updated_at?: string;
    username: string;
}

export type ICreateProject = {
    title: string;
    zipCode: string;
    deadline: string;
    cost: number;
}