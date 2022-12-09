import { EditProjectComponent } from "modules/project/component/editProject.component";
import NavEditProjectComponent from "modules/project/component/navEditProject.component";
import { useProject } from "modules/project/context/project.context";
import { UserGuard } from "modules/user/component/guard/user.guard";
import { useUser } from "modules/user/context/user.context";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function ProjectPage() {
    const { userToken } = useUser();
    const router = useRouter();
    const { projectId } = router.query;
    const { fetchProject, project } = useProject();

    useEffect(() => {
        if (userToken || project?.project_id !== projectId) { fetchProject(projectId as string) };
    }, [userToken])

    return (
        <UserGuard>
            <>
                <NavEditProjectComponent />
                <h2>Edit Project Page</h2>
                {project && <EditProjectComponent project={project} />}
            </>
        </UserGuard>
    );
}