import { Server } from './src/server';
import { usersRoutes } from './src/routes/users.routes';
import { projectRoutes } from './src/routes/project.routes';
import { projectsRoutes } from './src/routes/projects.routes';

export const server = new Server()
export const { app } = server

app.use("/users", usersRoutes)

app.use("/project", projectRoutes)

app.use("/projects", projectsRoutes)

if (process.env.NODE_ENV !== 'test') {
    server.start()
}
