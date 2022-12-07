import { Server } from './src/server';
import { Request, Response } from "express";
import { METHOD, RouteConfigProps } from './src/types/http';
import { createUserController, userController } from './src/controllers/user.controller';
import { createProjectController, deleteProjectController, doneProjectController, editProjectController, projectController, projectsController } from './src/controllers/project.controller';


export const server = new Server();

class Routes {
  @routeConfig({ method: METHOD.GET, path: "/users" })
  public user(request: Request, response: Response) {
    return userController(request, response);
  }

  @routeConfig({ method: METHOD.POST, path: "/users" })
  public createUser(request: Request, response: Response) {
    return createUserController(request, response);
  }

  @routeConfig({ method: METHOD.POST, path: "/project" })
  public createProject(request: Request, response: Response) {
    return createProjectController(request, response);
  }

  @routeConfig({ method: METHOD.GET, path: "/projects" })
  public projects(request: Request, response: Response) {
    return projectsController(request, response);
  }

  @routeConfig({ method: METHOD.GET, path: "/project" })
  public project(request: Request, response: Response) {
    return projectController(request, response);
  }

  @routeConfig({ method: METHOD.PUT, path: "/projects/:id" })
  public editProject(request: Request, response: Response) {
    return editProjectController(request, response);
  }

  @routeConfig({ method: METHOD.PATCH, path: "/projects/:id/done" })
  public doneProject(request: Request, response: Response) {
    return doneProjectController(request, response);
  }

  @routeConfig({ method: METHOD.DELETE, path: "/projects/:id" })
  public deleteProject(request: Request, response: Response) {
    return deleteProjectController(request, response);
  }
}

export function routeConfig({ method, path }: RouteConfigProps): MethodDecorator {
  return function (
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) {
    const response = (req: Request, res: Response) => {
      const original = descriptor.value(req, res);

      res.status(200).json(original);
    };

    server.app[method](path, response);
  };
}

server.start();