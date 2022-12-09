import { CreateProjectComponent } from 'components/project/createProject.component';
import NavCreateProjectComponent from 'components/project/navCreateProject.component';
import { UserGuard } from 'guard/user.guard';

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
