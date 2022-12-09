import bodyParser from 'body-parser';
import express, { Express } from 'express';
import * as http from 'http';

export class Server {
  private readonly _app: Express;

  get app(): Express {
    return this._app;
  }

  private _server!: http.Server;

  get server(): http.Server {
    return this._server;
  }

  constructor() {
    this._app = express();

    this._app.set('port', process.env.PORT || 3000);

    this.configureMiddleware();
  }

  public configureMiddleware() {
    // Required for POST requests
    this._app.use(bodyParser.json());
    this._app.use(bodyParser.urlencoded({ extended: true }));

    // CORS
    this.app.use(function (req, res, next) {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Max-Age', '3600');
      res.setHeader('Access-Control-Allow-Credentials', 'true');
      res.setHeader(
        'Access-Control-Allow-Methods',
        'GET,HEAD,OPTIONS,POST,PUT,PATCH,DELETE'
      );
      // include bearer token in CORS requests
      res.setHeader(
        'Access-Control-Allow-Headers',
        'Access-Control-Allow-Origin,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization'
      );
      next();
    });
  }

  public start() {
    const port = this._app.get('port') as string;
    this._server = this._app.listen(port, () => {
      console.log(`🚀 Server is running on port ${port}`);
    });
  }
}
