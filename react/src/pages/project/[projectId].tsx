import NavProjectDetailComponent from "modules/project/component/navProjectDetail.component";
import { ProjectDetailComponent } from "modules/project/component/projectDetail.component";
import { useProject } from "modules/project/context/project.context";
import { UserGuard } from "modules/user/component/guard/user.guard";
import { useUser } from "modules/user/context/user.context";
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