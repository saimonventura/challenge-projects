import { EditProjectComponent } from "components/project/editProject.component";
import NavEditProjectComponent from "components/project/navEditProject.component";
import { useProject } from "context/project.context";
import { useUser } from "context/user.context";
import { UserGuard } from "guard/user.guard";
import Link from "next/link";
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