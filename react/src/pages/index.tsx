import { ProjectList } from 'components/project/projectList.component';
import { useProject } from 'context/project.context';
import { useUser } from 'context/user.context';
import { UserGuard } from 'guard/user.guard';
import { useEffect } from 'react';

export default function Project() {
  const { userToken } = useUser();
  const { fetchProjects } = useProject();

  useEffect(() => {
    if (userToken) fetchProjects()
  }, [userToken])

  return (
    <UserGuard>
      <ProjectList />
    </UserGuard>
  );
}
