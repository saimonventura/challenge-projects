import NavProjectDetailComponent from "components/project/navProjectDetail.component";
import { ProjectDetailComponent } from "components/project/projectDetail.component";
import { useProject } from "context/project.context";
import { useUser } from "context/user.context";
import { UserGuard } from "guard/user.guard";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function ProjectDetailPage() {
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
                <NavProjectDetailComponent />
                <h2>Project Page</h2>
                {project && <ProjectDetailComponent project={project} />}
            </>
        </UserGuard>
    );
}