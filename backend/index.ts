import { Server } from './src/server';
import { loginUserController } from './src/controllers/user.controller'
import { createProjectController, deleteProjectController, doneProjectController, editProjectController, projectController, projectsController } from './src/controllers/project.controller'


export const server = new Server()
export const { app } = server

app.post("/users", loginUserController)

app.post("/project", createProjectController)
app.get("/projects", projectsController)
app.get("/project", projectController)
app.get("/projects/:id", editProjectController)
app.get("/projects/:id/done", doneProjectController)
app.get("/projects/:id", deleteProjectController)

if (process.env.NODE_ENV !== 'test') {
    server.start()
}
