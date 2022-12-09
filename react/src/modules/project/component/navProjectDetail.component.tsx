import Link from "next/link";
import { useRouter } from "next/router";
import { buttonStyle, navStyle } from "shared/style/className";
import { useProject } from "../context/project.context";


export default function NavProjectDetailComponent() {
    const router = useRouter();
    const { projectId } = router.query;
    const { fetchProject, project, deleteProject, setProjectDone } = useProject();

    return (
        <nav className={navStyle}>
            <Link className={buttonStyle} href="/">Home</Link>
            <Link className={buttonStyle} href="/project/create">Create</Link>
            {project?.project_id &&
                <>
                    <Link className={buttonStyle} href={`/project/edit/${project.project_id}`}>Edit</Link>
                    <button className={buttonStyle} onClick={() => setProjectDone(project.project_id).then(() =>
                        fetchProject(projectId as string)
                    )}>done</button>
                    <button className={buttonStyle} onClick={() => deleteProject(project.project_id).then(() => router.replace('/'))}>delete</button>
                </>
            }
        </nav>
    );
}