import { CreateProjectComponent } from "modules/project/component/createProject.component";
import NavCreateProjectComponent from "modules/project/component/navCreateProject.component";
import { UserGuard } from "modules/user/component/guard/user.guard";

export default function Project() {
    return (
        <UserGuard>
            <>
                <NavCreateProjectComponent />
                <h2>Create Project Page</h2>
                <CreateProjectComponent />
            </>
        </UserGuard>
    );
}
