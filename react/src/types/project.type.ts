export type IProjectContext = {
    projects: IProject[];
    project: IProject | undefined;
    fetchProjects: () => void;
    fetchProject: (projectId: string) => void;
    createProject: (projectData: ICreateProject) => void;
    editProject: (projectId: string, editedProjectData: ICreateProject) => void;
    setProjectDone: (projectId: string) => void;
    deleteProject: (projectId: string) => void;
};

export type IProject = {
    project_id: string;
    title: string;
    deadline: Date;
    zip_code: string;
    cost: number;
    created_at?: string;
    updated_at?: string;
    username: string;
}

export type ICreateProject = {
    title: string;
    zip_code: string;
    deadline: Date;
    cost: number;
}