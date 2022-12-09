import Link from "next/link";
import { useRouter } from "next/router";
import { useProject } from "../context/project.context";

export default function NavProjectDetailComponent() {
    const router = useRouter();
    const { projectId } = router.query;
    const { fetchProject, project, deleteProject, setProjectDone } = useProject();

    return (
        <nav style={{ display: 'flex', gap: "10px" }}>
            <Link href="/">Home</Link>
            <Link href="/project/create">Create</Link>
            {project?.project_id &&
                <>
                    <Link href={`/project/edit/${project.project_id}`}>Edit</Link>
                    <button onClick={() => setProjectDone(project.project_id).then(() =>
                        fetchProject(projectId as string)
                    )}>done</button>
                    <button onClick={() => deleteProject(project.project_id).then(() => router.replace('/'))}>delete</button>
                </>
            }
        </nav>
    );
}