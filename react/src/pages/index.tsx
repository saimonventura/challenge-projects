import { ProjectList } from 'modules/project/component/projectList.component';
import { useProject } from 'modules/project/context/project.context';
import { UserGuard } from 'modules/user/component/guard/user.guard';
import { useUser } from 'modules/user/context/user.context';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Project() {
  const { userToken } = useUser();
  const { fetchProjects } = useProject();

  useEffect(() => {
    if (userToken) fetchProjects()
  }, [userToken])

  return (
    <UserGuard>
      <>
        <nav>
          <Link href="/project/create">Create</Link>
        </nav>
        <ProjectList />
      </>
    </UserGuard>
  );
}
