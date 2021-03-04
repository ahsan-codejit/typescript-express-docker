import { Request, Response } from "express";
import BaseController from "./BaseController";
import DirectionManager from '../../domain/services/DirectionManager';
import { Directions as DirectionsEnum } from '../../domain/types/enum';

export default class GetDirection extends BaseController {
    constructor() {
        super();
    }

    async findDirection(req: Request, res: Response): Promise<any> {
        // input
        let query = req.query;
        let heading: number = Number(query.heading);
        let target: number = Number(query.target);

        // finding direction
        // Usually I prefer to implement usecases in to application layer and domain and business logics
        // are implemented in domain layer, then app communicate domain layer and controller with app
        // here requirement is very short, therefore I avoided application layer
        let directionManager = new DirectionManager(heading, target);
        let direction: DirectionsEnum = directionManager.getDirection();

        // response, I usually prefer here to use DTOs and Mapper to 
        // prepare response, but it's simple here
        let result = {
            direction
        }
        return this.success(res, result);
    }
}