import express, { Application, Request, Response, Router } from "express";
import errorHandler from "./infra/lib/middlewares/errorHandler";
import routes from './infra/routes';
import dotenv from "dotenv";
import NotFound from "./infra/lib/errors/NotFound";

class App {
    public app: Application;
    constructor() {
        this.app = express();
        this.config();
    }

    private config(): void {
        dotenv.config();
        this.app.use(express.json());
        this.app.use('/direction', routes);
        this.route404();
    }

    private route404(): void {
        const Route = Router();
        Route.get('*', (req: Request, res: Response) => {
            throw new NotFound('Sorry!!! your desired resource is not available')
        });
        this.app.use('/', Route);
        this.app.use(errorHandler);
    }
}
export default new App().app;