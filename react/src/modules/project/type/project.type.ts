export type IProjectContext = {
    projects: IProject[];
    project: IProject | undefined;
    fetchProjects: () => void;
    fetchProject: (projectId: string) => void;
    createProject: (projectData: ICreateUpdateProject) => void;
    editProject: (projectId: string, editedProjectData: ICreateUpdateProject) => void;
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

export type ICreateUpdateProject = {
    title: string;
    zipCode: string;
    deadline: string;
    cost: number;
}