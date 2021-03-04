import { Router, Request, Response } from 'express';
import validateQueryString from '../lib/middlewares/validateQuery';
import GetDirection from '../controllers/GetDirection';
const getDirection: GetDirection = new GetDirection()
const DirectionnRoutes = Router();

DirectionnRoutes.get('', validateQueryString, (req: Request, res: Response) => {
    return getDirection.findDirection(req, res);
});

export default DirectionnRoutes;