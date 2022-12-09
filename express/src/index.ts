import { Server } from './shared/http/express';
import { usersRoutes } from './modules/user/route/users.routes';
import { projectRoutes } from './modules/project/route/project.routes';
import { projectsRoutes } from './modules/project/route/projects.routes';

export const server = new Server()
export const { app } = server

app.use("/users", usersRoutes)

app.use("/project", projectRoutes)

app.use("/projects", projectsRoutes)

if (process.env.NODE_ENV !== 'test') {
    server.start()
}
